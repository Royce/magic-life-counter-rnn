import React from 'react';
import { View } from 'react-native';

export function ColorDot({ radius, color }) {
  return (
    <View
      style={{
        backgroundColor: color,
        height: radius * 2,
        width: radius * 2,
        borderRadius: radius,
      }}
    />
  );
}
