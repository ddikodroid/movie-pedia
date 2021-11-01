import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Gap} from '../atoms/gap';
import Icon from 'react-native-dynamic-vector-icons';
import {normalize} from '../../utils/normalize';
import {colors} from '../../styles/colors';

interface ITextInputProps extends TextInputProps {
  placeholder: string;
  label?: string;
  infoMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  withIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  onPressIcon?: () => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  label,
  placeholder,
  infoMessage,
  containerStyle,
  withIcon,
  iconName = 'search',
  iconSize = normalize(16),
  onPressIcon,
  style,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <Gap height={8} />
      {withIcon ? (
        <View style={styles.withIconContainer}>
          <RNTextInput
            style={[styles.textInputWithIcon, style]}
            placeholder={placeholder}
            placeholderTextColor={colors.lightGrey}
            {...props}
          />
          <Icon
            name={iconName}
            type="Ionicons"
            size={iconSize}
            color={colors.darkGrey}
            onPress={onPressIcon}
          />
        </View>
      ) : (
        <RNTextInput
          style={styles.rnTextInputContainer}
          placeholder={placeholder}
          placeholderTextColor={colors.lightGrey}
          {...props}
        />
      )}
      <Gap height={8} />
      <Text style={styles.infoMessageText}>{infoMessage}</Text>
    </View>
  );
};

export {TextInput};

const styles = StyleSheet.create({
  rnTextInputContainer: {
    backgroundColor: colors.white,
    borderRadius: normalize(8),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(8),
    fontSize: normalize(15),
    color: colors.darkGrey,
  },
  textInputWithIcon: {
    fontSize: normalize(15),
    width: '95%',
  },

  withIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: normalize(8),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(8),
  },
  labelText: {
    color: colors.white,
    fontSize: normalize(16),
    fontWeight: '600',
  },
  infoMessageText: {
    fontSize: normalize(12),
    color: colors.red,
  },
});
