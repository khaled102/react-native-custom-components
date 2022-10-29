import React from 'react';
import { TextInput } from 'react-native';

type propsType = {
  placeholder: string;
  style: any;
  secure: boolean;
  handle_change: any;
  type: boolean;
  multiline: boolean;
  value: any;
  placeholderTextColor: string;
  keyboardType: any;
  onFocus: any;
  onSubmitEditing: any;
  disabled: boolean;
};
export const PetrolInput = (props: propsType) => {
  const {
    placeholder,
    style,
    secure,
    handle_change,
    type = null,
    multiline,
    value,
    placeholderTextColor,
    keyboardType,
    onFocus,
    onSubmitEditing,
    disabled,
  } = props;
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      secureTextEntry={secure}
      onChangeText={(text) =>
        type ? handle_change(type, text) : handle_change(text)
      }
      placeholderTextColor={placeholderTextColor}
      multiline={multiline}
      value={value}
      onFocus={onFocus}
      keyboardType={keyboardType}
      onSubmitEditing={onSubmitEditing}
      editable={disabled}
    />
  );
};
