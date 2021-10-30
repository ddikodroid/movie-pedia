import React from 'react';
import {Image, ImageStyle} from 'react-native';
import {normalize} from '../../utils/normalize';

export type IDetailImageProps = {
  uri: string;
};

const detailImageStyle: ImageStyle = {
  width: '100%',
  height: normalize(200),
  borderRadius: normalize(8),
};

const DetailImage: React.FC<IDetailImageProps> = ({uri}) => {
  return <Image source={{uri}} style={detailImageStyle} resizeMode="cover" />;
};

export {DetailImage};
