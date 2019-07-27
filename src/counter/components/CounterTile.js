import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

import { OutlineText, useButtonPressEager } from '../../components';
import { getColorMap } from '../../settings/selectors';
import { decrement, increment } from '../actions';
import { getCounter } from '../selectors';

function PlusButton({ onPress }) {
  const [pressed, onPressIn, onPressOut] = useButtonPressEager(onPress);

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={{
          position: 'absolute',
          right: 0,
          // backgroundColor: "pink",
          padding: 30,
          paddingRight: 10,
        }}
      >
        <Icon name="plus" size={80} color={pressed ? '#fffc' : 'white'} />
      </View>
    </TouchableWithoutFeedback>
  );
}

function MinusButton({ onPress }) {
  const [pressed, onPressIn, onPressOut] = useButtonPressEager(onPress);

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          // backgroundColor: "pink",
          padding: 30,
          paddingLeft: 10,
        }}
      >
        <Icon name="minus" size={80} color={pressed ? '#fffc' : 'white'} />
      </View>
    </TouchableWithoutFeedback>
  );
}

function CounterTile({ counter, color, increment, decrement, invert = false }) {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: color,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
        },
        invert && { transform: [{ rotateX: '180deg' }, { rotateY: '180deg' }] },
      ]}
    >
      <PlusButton onPress={increment} />
      <MinusButton onPress={decrement} />
      <OutlineText
        text={counter}
        style={{ color: 'white', fontSize: 150, fontWeight: '700' }}
        outlineColor={'black'}
        outlineWidth={1}
      />
    </View>
  );
}

const _CounterTile = connect(
  function mapStateToProps(state, { player }) {
    const colorMap = getColorMap(state);
    const color = colorMap[player];
    const counter = getCounter(state, player);

    return { color, counter };
  },
  function mapDispatchToProps(dispatch, { player }) {
    return {
      increment: () => dispatch(increment(player)),
      decrement: () => dispatch(decrement(player)),
    };
  }
)(CounterTile);

export { _CounterTile as CounterTile };
