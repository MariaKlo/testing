import React from 'react';
import styles from './styles.module.css';

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>Oops! The page is not found...</p>
    </div>
  );
};
