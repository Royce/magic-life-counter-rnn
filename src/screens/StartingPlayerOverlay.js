import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { StartingPlayer } from '../startingPlayer/components';

function StartingPlayerOverlay({ player, componentId }) {
  const dismiss = () => Navigation.dismissOverlay(componentId);

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <StartingPlayer />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartingPlayerOverlay;

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
