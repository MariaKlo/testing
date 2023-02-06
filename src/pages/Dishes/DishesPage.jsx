import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dish } from '../../components/Dish/Dish';
import { GET_ROUTES } from '../../routes/constants';
import { selectDishIds } from '../../store/modules/dish/selectors';
import { fetchDishes } from '../../store/modules/dish/thunks/fetchDishes';

import styles from './styles.module.css';

export const DishesPage = () => {
  const dishIds = useSelector((state) => selectDishIds(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  return (
    <div className={styles.root}>
      <h2>Dishes</h2>
      {dishIds.map((dishId) => (
        <Dish
          key={dishId}
          dishId={dishId}
          route={GET_ROUTES.getDishRoute(dishId)}
          className={styles.dish}
        />
      ))}
    </div>
  );
};
