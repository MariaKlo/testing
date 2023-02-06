import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { Dish } from '../../components/Dish/Dish';
import { clearCart } from '../../store/modules/cart/actions';
import { selectCartDishIds } from '../../store/modules/cart/selectors';

import styles from './styles.module.css';

export const Cart = () => {
  const dishIds = useSelector(selectCartDishIds);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>Cart</h2>
        <Button
          onClick={() => dispatch(clearCart())}
          className={styles.clearButton}
        >
          Clear
        </Button>
      </div>
      {dishIds.length > 0 ? (
        <div>
          {dishIds.map((dishId) => (
            <Dish dishId={dishId} className={styles.dish} />
          ))}
        </div>
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};
