import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getDurationSinceLastCheck,
  getAppVersion,
  getPendingAppVersion,
  getStatus,
} from '../selectors';

const padding = 30;
const fontSize = 16;

function VersionMenuItem({ lastCheck, appVersion, pendingVersion, status }) {
  return (
    <View
      style={{
        paddingHorizontal: padding,
        paddingVertical: padding / 2,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
      }}
    >
      <View
        style={{
          backgroundColor: '#ccc',
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 3,
        }}
      >
        <Text style={{ color: '#222', fontSize }}>{status}</Text>
      </View>
      {pendingVersion && (
        <Text style={styles.text}>Pending Version: {pendingVersion}</Text>
      )}
      <View style={{ height: 5 }} />
      <Text style={styles.text}>Version: {appVersion}</Text>
      <Text style={styles.text}>Last checked {lastCheck}</Text>
    </View>
  );
}

const _MenuItem = connect(state => {
  return {
    lastCheck: getDurationSinceLastCheck(state),
    appVersion: getAppVersion(state),
    pendingVersion: getPendingAppVersion(state),
    status: getStatus(state),
  };
})(VersionMenuItem);

export { _MenuItem as VersionMenuItem };

const styles = StyleSheet.create({
  text: { color: '#ccc', fontSize },
  borderBottom: {
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
