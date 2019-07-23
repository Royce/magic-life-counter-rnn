import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";

import { increment } from "../counter/actions";
import { OutlineText } from "../components";

function CounterTile({ current, color, invert = false }) {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: color,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center"
        },
        invert ? { transform: [{ rotateX: "180deg" }] } : null
      ]}
    >
      <OutlineText
        text={current}
        style={{ color: "white", fontSize: 150, fontWeight: "700" }}
        outlineColor={"black"}
        outlineWidth={1}
      />
    </View>
  );
}

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
