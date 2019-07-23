import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../counter/actions';
import { CounterTile } from '../counter/components';

function CounterScreen({ counter, increment, decrement }) {
  return (
    <View style={styles.container}>
      <CounterTile
        color={'red'}
        current={counter}
        increment={increment}
        invert={true}
      />

      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={increment}>
        <Text>Count: {counter}</Text>
      </TouchableHighlight>

      <CounterTile
        color={'blue'}
        current={counter}
        increment={increment}
        decrement={decrement}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return { counter: state.counter.counter };
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
