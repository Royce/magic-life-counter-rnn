import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { ColorPicker } from '../settings/components/ColorPicker';

function ColorPickerOverlay({ player, componentId }) {
  const dismiss = () => Navigation.dismissOverlay(componentId);

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <ColorPicker player={player} onClose={dismiss} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ColorPickerOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBottom: {
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
