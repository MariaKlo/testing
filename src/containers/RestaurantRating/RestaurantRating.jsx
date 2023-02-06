import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '../../components/Rating/Rating';
import { Size } from '../../constants/ui';
import { createSelectRestaurantRating } from '../../store/modules/restaurant/selectors';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { fetchReviewsByRestaurantId } from '../../store/modules/review/thunk/fetchReviewsByRestaurantId';

export const RestaurantRating = ({ restaurantId, className }) => {
  const dispatch = useDispatch();
  const selectRestaurantRating = useCallback(
    createSelectRestaurantRating(),
    []
  );

  const rating = useSelector((state) =>
    selectRestaurantRating(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Rating value={rating} size={Size.l} className={className} />;
};

export const RestaurantRatingWithMemo = React.memo(RestaurantRating);
