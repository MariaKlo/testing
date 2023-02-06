import { Button } from '../Button/Button';
import classnames from 'classnames';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDish, removeDish } from '../../store/modules/cart/actions';
import { selectDishCountByName } from '../../store/modules/cart/selectors';
import { selectDishById } from '../../store/modules/dish/selectors';
import { Link } from 'react-router-dom';

export const Dish = ({ dishId, route, className }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) =>
    selectDishCountByName(state, { dishId })
  );
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  const decrement = () => dispatch(removeDish(dishId));
  const increment = () => dispatch(addDish(dishId));

  const { name, ingredients } = dish;

  return (
    <div
      className={classnames(styles.root, className, {
        [styles.rootBig]: count > 4,
      })}
    >
      <div>
        {route ? (
          <Link to={route} className={classnames(styles.name, styles.link)}>
            {name}
          </Link>
        ) : (
          <span className={styles.name}>{name}</span>
        )}
        <div>{ingredients?.join(', ')}</div>
      </div>
      <div>
        <Button onClick={decrement}>-</Button>
        <span className={styles.count}>{count}</span>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
