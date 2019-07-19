import React, { Component } from "react";
import { FlatList, Text, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

import * as actions from "./actions";
import { getPermission, isLoading, getList } from "./selectors";
import { UNKNOWN, DENIED, AUTHORIZED, DENIED_PERMANENT } from "./constants";
import ContactItem from "./ContactItem";

const RequestPermissions = connect(
  null,
  { request: actions.request }
)(function RequestPermissions({ request }) {
  return (
    <TouchableHighlight onPress={request}>
      <View>
        <Text>Make Request</Text>
      </View>
    </TouchableHighlight>
  );
});

function Loading() {
  return (
    <View>
      <Text>LOADING</Text>
    </View>
  );
}

function PermissionDenied() {
  return (
    <View>
      <Text>Permission Denied</Text>
    </View>
  );
}

class ContactList extends Component {
  renderItem = ({ item }) => <ContactItem {...item} />;

  render() {
    const showList = !(
      this.props.needPermission ||
      this.props.permissionDenied ||
      this.props.loading
    );
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center"
        }}
      >
        {this.props.needPermission && <RequestPermissions />}
        {this.props.loading && <Loading />}
        {this.props.permissionDenied && <PermissionDenied />}

        {showList && (
          <FlatList
            data={this.props.list}
            renderItem={this.renderItem}
            style={{ backgroundColor: "red", flex: 1 }}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(`state: `, state);
  console.log(`getList: `, getList(state));
  const permission = getPermission(state);
  return {
    needPermission:
      permission !== AUTHORIZED && permission !== DENIED_PERMANENT,
    permissionDenied: permission === DENIED_PERMANENT,
    loading: isLoading(state),
    list: getList(state)
  };
}

export default connect(
  mapStateToProps,
  { request: actions.request }
)(ContactList);
