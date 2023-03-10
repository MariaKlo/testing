import { useSelector } from 'react-redux';
import {
  selectIsUserLoading,
  selectUserById,
} from '../../store/modules/user/selectors';

import styles from './styles.module.css';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  const isLoading = useSelector(selectIsUserLoading);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return null;
  }

  return <div className={styles.root}>{user.name}</div>;
};
