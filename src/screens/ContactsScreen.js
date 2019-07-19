import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import ContactList from "../contacts/ContactList";

function ContactsScreen() {
  return (
    <View style={styles.container}>
      <ContactList />
    </View>
  );
}

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
