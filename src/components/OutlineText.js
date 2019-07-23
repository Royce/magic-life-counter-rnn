import React from 'react';
import { Text } from 'react-native';

export function OutlineText({ text, style, outlineWidth, outlineColor }) {
  var textIndex = 0;
  const getStyle = function(x, y) {
    return {
      ...style,
      position: textIndex++ === 1 ? 'relative' : 'absolute',
      textShadowColor: outlineColor,
      textShadowRadius: outlineWidth,
      textShadowOffset: { width: outlineWidth * x, height: outlineWidth * y },
    };
  };

  return (
    <>
      <Text style={getStyle(1.0, 0.0)}>{text}</Text>
      <Text style={getStyle(0.8, 0.8)}>{text}</Text>
      <Text style={getStyle(0.0, 1.0)}>{text}</Text>
      <Text style={getStyle(-0.8, 0.8)}>{text}</Text>
      <Text style={getStyle(-1.0, 0.0)}>{text}</Text>
      <Text style={getStyle(-0.8, -0.8)}>{text}</Text>
      <Text style={getStyle(0.0, -1.0)}>{text}</Text>
      <Text style={getStyle(0.8, -0.8)}>{text}</Text>
    </>
  );
}
