import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantIdsFilteredByDishId } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { RestaurantLink } from '../RestaurantLink/RestaurantLink';

import styles from './styles.module.css';

export const RestaurantList = ({ dishId }) => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByDishId(state, { dishId })
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <div>
      <h3>Доступно в:</h3>
      {restaurantIds.map((restaurantId) => (
        <RestaurantLink
          key={restaurantId}
          restaurantId={restaurantId}
          className={styles.restaurant}
        />
      ))}
    </div>
  );
};
