import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import _ from 'lodash';

import { roll } from '../actions';
import { WhiteIconButton } from '../../components';

function RollStartingPlayerButton({ onPress }) {
  const _onPress = () => {
    onPress();
    Navigation.showOverlay({
      component: {
        name: 'StartingPlayerOverlay',
      },
    });
  };

  return (
    <WhiteIconButton
      name={'swap-vertical-bold'}
      IconComponent={Icon}
      onPress={_onPress}
    />
  );
}

const _RollStartingPlayer = connect(
  null,
  { onPress: roll }
)(RollStartingPlayerButton);

export { _RollStartingPlayer as RollStartingPlayerButton };
