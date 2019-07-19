import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";

import { increment } from "../counter/actions";

function CounterScreen({ counter, increment } = props) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={increment}>
        <Text>Count: {counter}</Text>
      </TouchableHighlight>
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
