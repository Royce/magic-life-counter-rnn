import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";

import { increment } from "../counter/actions";
import { CounterTile } from "../counter/CounterTile";

function CounterScreen({ counter, increment } = props) {
  return (
    <View style={styles.container}>
      <CounterTile color={"red"} current={11} invert={true} />
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={increment}>
        <Text>Count: {counter}</Text>
      </TouchableHighlight>
      <CounterTile color={"blue"} current={99} />
    </View>
  );
}

function mapStateToProps(state) {
  return { counter: state.counter.counter };
}

export default connect(
  mapStateToProps,
  { increment }
)(CounterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
