import React from "react";
import { View, Text } from "react-native";

function ContactItem({ name }) {
  return (
    <View
      style={{
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        margin: 4,
        padding: 3,
        backgroundColor: "white"
      }}
    >
      <Text>{name}</Text>
    </View>
  );
}

export default ContactItem;
