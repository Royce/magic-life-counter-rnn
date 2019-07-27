import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import _ from 'lodash';

import { WhiteIconButton } from '../../components';
import { reset } from '../actions';

function ResetButton({ onPress }) {
  return (
    <WhiteIconButton IconComponent={Icon} name={'refresh'} onPress={onPress} />
  );
}

const _ResetButton = connect(
  null,
  { onPress: reset }
)(ResetButton);

export { _ResetButton as ResetButton };
