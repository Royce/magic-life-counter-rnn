import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { numberAsStringWithExplicitSign } from '../../components';
import { getColorMap } from '../../settings/selectors';

import { PLAYER_ONE, PLAYER_TWO } from '../../constants';
import { getTemp } from '../selectors';

function TempCounterView({ colorMap, pendingModifications }) {
  if (pendingModifications.length === 0) return null;

  return (
    <>
      {_.map(pendingModifications, ({ player, mod, invert }) => (
        <View
          key={player}
          style={[
            {
              height: 100,
              width: 100,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white',
              margin: 10,
              backgroundColor: colorMap[player],
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: 'black',
              shadowRadius: 10,
              shadowOpacity: 0.3,
              shadowOffset: [0, 0],
            },
            invert && {
              transform: [{ rotateX: '180deg' }, { rotateY: '180deg' }],
            },
          ]}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              position: 'relative',
              left: -5, // Nudge over to compensate for sign (+/-)
            }}
          >
            {numberAsStringWithExplicitSign(mod)}
          </Text>
        </View>
      ))}
    </>
  );
}

const _TempCounterView = connect(
  state => {
    return {
      colorMap: getColorMap(state),
      pendingModifications: _.filter(
        [
          { player: PLAYER_ONE, mod: getTemp(state, PLAYER_ONE), invert: true },
          { player: PLAYER_TWO, mod: getTemp(state, PLAYER_TWO) },
        ],
        ({ mod }) => mod !== 0
      ),
    };
  },
  null
)(TempCounterView);

export { _TempCounterView as TempCounterView };
