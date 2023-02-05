import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantRating,
} from '../../store/modules/restaurant/selectors';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { RestaurantRating } from '../../containers/RestaurantRating/RestaurantRating';

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
      <RestaurantRating restaurantId={restaurantId} />
      <div>
        <NavLink to="menu">Menu</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
