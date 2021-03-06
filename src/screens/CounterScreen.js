import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  CounterTile,
  ResetButton,
  TempCounterView,
} from '../counters/components';
import { RollStartingPlayerButton } from '../startingPlayer/components';
import { PLAYER_ONE, PLAYER_TWO } from '../constants';

function CounterScreen() {
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', zIndex: 200, flexDirection: 'row' }}>
        <TempCounterView />
      </View>
      <CounterTile player={PLAYER_TWO} invert={true} />
      <View
        style={{
          backgroundColor: '#111',
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'center',
          zIndex: 100,
        }}
      >
        <ResetButton />
        <View style={{ width: 30 }} />
        <RollStartingPlayerButton />
      </View>
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
