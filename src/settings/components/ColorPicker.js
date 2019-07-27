import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import _ from 'lodash';

import { otherPlayer } from '../../constants';
import { ColorDot, useButtonPress } from '../../components';
import { AVAILABLE_COLORS } from '../constants';
import { getColorMap } from '../selectors';
import { setColorForPlayer } from '../actions';

export const ColorPicker = connect(
  function mapStateToProps(state) {
    return { colorMap: getColorMap(state) };
  },
  { setColorForPlayer }
)(function ColorPicker({ player, colorMap, setColorForPlayer, onClose }) {
  const selected = colorMap[player];
  const unavailable = colorMap[otherPlayer(player)];

  function setColor(color) {
    setColorForPlayer(color, player);
    onClose();
  }

  return (
    <View
      style={{
        backgroundColor: '#222',
        padding: 7,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff6',
      }}
    >
      {_.map(_.chunk(AVAILABLE_COLORS, 3), function(colors, i) {
        return (
          <View key={i.toString()} style={{ flexDirection: 'row' }}>
            {_.map(colors, function(color) {
              return (
                <ColorPickerButton
                  key={color}
                  color={color}
                  selected={selected === color}
                  disabled={unavailable === color}
                  onPress={() => setColor(color)}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
});

function ColorPickerButton({ color, selected, disabled, onPress }) {
  const [pressed, onPressIn, onPressOut] = useButtonPress(onPress);

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
    >
      <View
        style={[
          {
            padding: 10,
            borderColor: pressed || disabled ? '#999' : 'white',
            borderWidth: Math.min(StyleSheet.hairlineWidth * 2, 1),
            borderRadius: 10,
            backgroundColor: pressed ? '#0003' : 'transparent',
            margin: 7,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        {selected && (
          <View style={{ position: 'absolute', zIndex: 100, paddingTop: 1 }}>
            <Icon name="check" size={25} color="#fff" />
          </View>
        )}
        {!selected && disabled && (
          <View style={{ position: 'absolute', zIndex: 100, paddingTop: 1 }}>
            <Icon name="close" size={25} color="#ccc" />
          </View>
        )}
        <ColorDot radius={15} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
}
