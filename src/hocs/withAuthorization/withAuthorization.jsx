import React from 'react';
import { useSelector } from 'react-redux';

export const withAuthorization = (WrappedComponent) => {
  return (props) => {
    // const isAuthorized = useSelector(selectIsAuthorized);
    const isAuthorized = true;

    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
