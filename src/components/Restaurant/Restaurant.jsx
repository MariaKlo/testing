import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantRating,
} from '../../store/modules/restaurant/selectors';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { RestaurantRating } from '../../containers/RestaurantRating/RestaurantRating';
import classNames from 'classnames';

import styles from './styles.module.css';

const tabs = ['menu', 'reviews'];

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <RestaurantRating restaurantId={restaurantId} className={styles.rating} />
      <div>
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={tab}
            className={({ isActive }) =>
              classNames(styles.tab, { [styles.active]: isActive })
            }
          >
            {tab}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
