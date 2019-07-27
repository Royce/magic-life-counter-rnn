import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CounterTile } from '../counters/components';
import { PLAYER_ONE, PLAYER_TWO } from '../constants';

function CounterScreen() {
  return (
    <View style={styles.container}>
      <CounterTile player={PLAYER_TWO} invert={true} />
      <CounterTile player={PLAYER_ONE} />
    </View>
  );
}

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
