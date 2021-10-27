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

interface ITextInputProps extends TextInputProps {
  placeholder: string;
  label: string;
  infoMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  withIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  onPressIcon?: () => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  label,
  placeholder,
  infoMessage,
  containerStyle,
  withIcon,
  iconName = 'search',
  iconSize = 16,
  onPressIcon,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <Gap height={8} />
      {withIcon ? (
        <View style={styles.withIconContainer}>
          <RNTextInput
            style={styles.textInputWithIcon}
            placeholder={placeholder}
            placeholderTextColor="#8d8d8d"
            {...props}
          />
          <Icon
            name={iconName}
            type="Ionicons"
            size={iconSize}
            color="#2d2d2d"
            onPress={onPressIcon}
          />
        </View>
      ) : (
        <RNTextInput
          style={styles.rnTextInputContainer}
          placeholder={placeholder}
          placeholderTextColor="#8d8d8d"
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
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    fontSize: 15,
  },
  textInputWithIcon: {
    fontSize: 15,
    width: '95%',
  },

  withIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  labelText: {
    color: '#f8f8f8',
    fontSize: 16,
    fontWeight: '600',
  },
  infoMessageText: {
    fontSize: 11,
    color: '#be2831',
  },
});