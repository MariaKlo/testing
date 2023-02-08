import React from 'react';

export const withAuthorization = (WrappedComponent) => {
  return (props) => {
    const isAuthorized = true;

    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
