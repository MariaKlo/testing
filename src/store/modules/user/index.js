import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchUsers } from './thunk/fetchUsers';

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        userEntityAdapter.setAll(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
