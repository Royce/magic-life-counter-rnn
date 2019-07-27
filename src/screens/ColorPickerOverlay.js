import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { PLAYER_ONE, PLAYER_TWO } from '../constants';
import { ColorPicker } from '../settings/components/ColorPicker';

function ColorPickerOverlay({ componentId }) {
  const dismiss = () => Navigation.dismissOverlay(componentId);

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <ColorPicker player={PLAYER_TWO} onClose={dismiss} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  {}
)(ColorPickerOverlay);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBottom: {
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
