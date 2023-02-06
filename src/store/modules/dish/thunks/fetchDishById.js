import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDishById } from '../selectors';

export const fetchDishById = createAsyncThunk(
  `dish/fetchDishById`,
  async (dishId, { getState, rejectWithValue }) => {
    const dish = selectDishById(getState(), { dishId });

    if (dish) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/products?productId=${dishId}`
    );

    return await response.json();
  }
);
