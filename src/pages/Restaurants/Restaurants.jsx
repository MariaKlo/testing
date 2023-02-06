import { Tabs } from '../../components/Tabs/Tabs';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRestaurantLoading } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { fetchUsers } from '../../store/modules/user/thunk/fetchUsers';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <Tabs onTabClick={setActiveRestaurantId} activeId={activeRestaurantId} />
      <div className={styles.restaurant}>
        <Outlet />
      </div>
    </div>
  );
};
