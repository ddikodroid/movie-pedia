import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import {normalize} from '../../utils/normalize';

export type ISectionTitleProps = {
  title: string;
  style?: StyleProp<TextStyle>;
};

const SectionTitle: React.FC<ISectionTitleProps> = ({title, style}) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export {SectionTitle};

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: '#e8e8e8',
  },
});
