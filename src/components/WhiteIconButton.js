import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useButtonPress } from '.';
export function WhiteIconButton({ name, IconComponent, onPress }) {
  const [pressed, onPressIn, onPressOut] = useButtonPress(onPress);
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={[
          {
            padding: 10,
            borderColor: pressed ? '#999' : 'white',
            borderWidth: Math.min(StyleSheet.hairlineWidth * 2, 1),
            borderRadius: 10,
            backgroundColor: pressed ? '#111' : '#222',
            margin: -5,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <IconComponent
          name={name}
          size={25}
          color={pressed ? '#999' : '#fff'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
