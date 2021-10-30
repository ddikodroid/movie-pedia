import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  PressableProps,
} from 'react-native';
import {normalize} from '../../utils/normalize';

interface IButtonProps extends PressableProps {
  title: string;
  loading?: boolean;
  buttonStyle?: ViewStyle;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  title,
  loading,
  buttonStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.base, buttonStyle]}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  base: {
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(8),
    borderRadius: normalize(8),
    alignItems: 'center',
    backgroundColor: '#546ee5',
  },
  title: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    letterSpacing: normalize(1.5),
    color: '#ffff',
  },
});
