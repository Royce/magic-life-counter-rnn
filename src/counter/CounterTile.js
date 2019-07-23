import React, { useState, useCallback } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { OutlineText } from "../components";

function useButton(onPress) {
  const [pressed, setPressed] = useState(false);

  const onPressIn = useCallback(() => {
    setPressed(true);
    onPress();
  }, [onPress]);

  const onPressOut = useCallback(() => {
    setPressed(false);
  }, []);

  return [pressed, onPressIn, onPressOut];
}

function PlusButton({ onPress }) {
  const [pressed, onPressIn, onPressOut] = useButton(onPress);

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={{
          position: "absolute",
          right: 0,
          // backgroundColor: "pink",
          padding: 30,
          paddingRight: 10
        }}
      >
        <Icon name="plus" size={80} color={pressed ? "#fffc" : "white"} />
      </View>
    </TouchableWithoutFeedback>
  );
}

function MinusButton({ onPress }) {
  const [pressed, onPressIn, onPressOut] = useButton(onPress);

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={{
          position: "absolute",
          left: 0,
          // backgroundColor: "pink",
          padding: 30,
          paddingLeft: 10
        }}
      >
        <Icon name="minus" size={80} color={pressed ? "#fffc" : "white"} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export function CounterTile({
  current,
  color,
  increment,
  decrement,
  invert = false
}) {
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
        invert && { transform: [{ rotateX: "180deg" }, { rotateY: "180deg" }] }
      ]}
    >
      <PlusButton onPress={increment} />
      <MinusButton onPress={decrement} />
      <OutlineText
        text={current}
        style={{ color: "white", fontSize: 150, fontWeight: "700" }}
        outlineColor={"black"}
        outlineWidth={1}
      />
    </View>
  );
}
