import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadMoreSkeleton = (
  <SkeletonPlaceholder.Item
    flexDirection="row"
    justifyContent="space-between"
    marginTop={16}>
    <SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item width={160} height={220} borderRadius={8} />
      <SkeletonPlaceholder.Item
        width={160}
        height={20}
        borderRadius={8}
        marginTop={8}
      />
    </SkeletonPlaceholder.Item>
    <SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item width={160} height={220} borderRadius={8} />
      <SkeletonPlaceholder.Item
        width={160}
        height={20}
        borderRadius={8}
        marginTop={8}
      />
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder.Item>
);

export {LoadMoreSkeleton};
