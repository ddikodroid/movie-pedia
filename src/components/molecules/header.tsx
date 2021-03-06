import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {colors} from '../../styles/colors';
import {normalize} from '../../utils/normalize';

export type IHeaderProps = {
  title: string;
  leftContent?: {
    icon: string;
    onPress: () => void;
  };
  rightContent?: {
    icon: string;
    onPress: () => void;
  };
};

const Header: React.FC<IHeaderProps> = ({title, leftContent, rightContent}) => {
  return (
    <View style={styles.container}>
      {leftContent ? (
        <Icon
          onPress={leftContent.onPress}
          name={leftContent.icon}
          type="Ionicons"
          size={normalize(24)}
          color={colors.white}
        />
      ) : (
        <View />
      )}
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
      {rightContent ? (
        <Icon
          onPress={rightContent.onPress}
          name={rightContent.icon}
          type="Ionicons"
          size={normalize(24)}
          color={colors.white}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(16),
  },
  headerTitle: {
    color: colors.white,
    fontSize: normalize(16),
    fontWeight: '800',
    letterSpacing: normalize(1.25),
    width: '70%',
    textAlign: 'center',
  },
});
