import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getSummary } from '../selectors';

const padding = 30;

function VersionMenuItem({ summary }) {
  return (
    <View
      style={[
        styles.borderBottom,
        {
          paddingHorizontal: padding,
          paddingVertical: padding / 2,
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          flexDirection: 'row',
        },
      ]}
    >
      <Text style={{ color: 'green', fontSize: 18 }}>{summary}</Text>
    </View>
  );
}

const _MenuItem = connect(state => {
  return {
    summary: getSummary(state),
  };
})(VersionMenuItem);

export { _MenuItem as VersionMenuItem };

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
