import React from "react";
import { View } from "react-native";

import { OutlineText } from "../components";

export function CounterTile({ current, color, invert = false }) {
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
      <OutlineText
        text={current}
        style={{ color: "white", fontSize: 150, fontWeight: "700" }}
        outlineColor={"black"}
        outlineWidth={1}
      />
    </View>
  );
}
