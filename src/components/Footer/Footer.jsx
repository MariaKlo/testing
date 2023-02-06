import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(styles.root, className)}>
      Все права защищены
    </footer>
  );
};
