import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { getColorMap } from '../../settings/selectors';
import { get } from '../selectors';
import { PLAYER_ONE, PLAYER_TWO } from '../../constants';

function StartingPlayer({ player, colorMap }) {
  const color = colorMap[player];
  const direction =
    player === PLAYER_TWO
      ? 'arrow-upward'
      : player === PLAYER_ONE
      ? 'arrow-downward'
      : null;

  return (
    <View
      style={[
        {
          padding: 10,
          borderColor: 'white',
          borderWidth: Math.min(StyleSheet.hairlineWidth * 2, 1),
          borderRadius: 10,
          backgroundColor: color,
          margin: -5,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <Icon name={direction} size={70} color={'#fff'} />
    </View>
  );
}

const _StartingPlayer = connect(
  function mapStateToProps(state) {
    return { colorMap: getColorMap(state), player: get(state) };
  },
  {}
)(StartingPlayer);

export { _StartingPlayer as StartingPlayer };
