import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../counter/actions';
import { CounterTile } from '../counter/components';
import { getColorMap } from '../settings/selectors';
import { PLAYER_ONE, PLAYER_TWO } from '../constants';

function CounterScreen({ counter, increment, decrement, colorMap }) {
  return (
    <View style={styles.container}>
      <CounterTile
        color={colorMap[PLAYER_TWO]}
        current={counter}
        increment={increment}
        decrement={decrement}
        invert={true}
      />

      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={increment}>
        <Text>Count: {counter}</Text>
      </TouchableHighlight>

      <CounterTile
        color={colorMap[PLAYER_ONE]}
        current={counter}
        increment={increment}
        decrement={decrement}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return { counter: state.counter.counter, colorMap: getColorMap(state) };
}

export default connect(
  mapStateToProps,
  { increment, decrement }
)(CounterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
