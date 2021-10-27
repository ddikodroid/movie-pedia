import React from 'react';
import {View} from 'react-native';

export type IGapProps = {
  width?: number;
  height?: number;
};

const Gap: React.FC<IGapProps> = ({width, height}) => {
  return <View style={{width, height}} />;
};

export {Gap};
