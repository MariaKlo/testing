import React from 'react';
import styles from './styles.module.css';

export const Home = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        AnyFood will help you to find an ideal restaurant and order food
      </h1>
      <p>Click on 'Restaurants' to find your ideal restaurant</p>
      <p>Or click 'Dishes' to find dishes</p>
    </div>
  );
};
