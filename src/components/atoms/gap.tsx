import React from 'react';
import {View} from 'react-native';
import {normalize} from '../../utils/normalize';

export type IGapProps = {
  width?: number;
  height?: number;
};

const Gap: React.FC<IGapProps> = ({width, height}) => {
  return (
    <View style={{width: normalize(width) || 0, height: normalize(height)}} />
  );
};

export {Gap};
