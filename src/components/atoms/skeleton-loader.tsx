import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export type ISkeletonLoaderProps = {
  //   loader: Loader;
};

const SkeletonLoader = ({loader}) => {
  return <SkeletonPlaceholder>{loader}</SkeletonPlaceholder>;
};

export {SkeletonLoader};
