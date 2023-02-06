import { Review } from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { fetchReviewsByRestaurantId } from '../../store/modules/review/thunk/fetchReviewsByRestaurantId';
import { useParams } from 'react-router-dom';

import styles from './styles.module.css';

export const Reviews = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {reviewIds.map((id) => (
          <Review key={id} reviewId={id} className={styles.review} />
        ))}
      </div>
    </div>
  );
};
