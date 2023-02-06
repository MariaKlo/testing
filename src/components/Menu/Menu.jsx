import { Dish } from '../Dish/Dish';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantMenuByIdSortedByDishName } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsDishLoading } from '../../store/modules/dish/selectors';
import { fetchDishByRestaurantId } from '../../store/modules/dish/thunks/fetchDishByRestaurantId';
import { Button } from '../Button/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAlternativeSort } from './utils';
import { sortDirections } from '../../constants/sortDirections';
import { withAuthorization } from '../../hocs/withAuthorization/withAuthorization';

import styles from './styles.module.css';

const sortSearchParamName = 'sort';
const defaultSort = { [sortSearchParamName]: sortDirections.asc };

export const Menu = () => {
  const { restaurantId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(defaultSort);
  const dispatch = useDispatch();
  const currentSort = searchParams.get(sortSearchParamName);

  const dishIds = useSelector((state) =>
    selectRestaurantMenuByIdSortedByDishName(state, {
      restaurantId,
      sortDirection: currentSort,
    })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishByRestaurantId(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>Menu</h2>
        <Button
          className={styles.sortButton}
          onClick={() => {
            setSearchParams({
              sort: getAlternativeSort(currentSort),
            });
          }}
        >
          {currentSort}
        </Button>
      </div>

      <div>
        {dishIds.map((id) => (
          <Dish key={id} dishId={id} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};

export const MenuWithAuthorizedCheck = withAuthorization(Menu);
