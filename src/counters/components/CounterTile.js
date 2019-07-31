import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

import {
  OutlineText,
  numberAsStringWithExplicitSign,
  useButtonPressEager,
} from '../../components';
import { getColorMap } from '../../settings/selectors';
import { decrement, increment } from '../actions';
import { getNextTotal, getTemp, getHistoryString } from '../selectors';

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

function CounterTile({
  current,
  temp,
  history,
  color,
  increment,
  decrement,
  invert = false,
}) {
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
      <Text
        style={{
          position: 'absolute',
          top: 15,
          color: '#999',
          fontSize: 20,
        }}
      >
        {history}
      </Text>
      {temp !== 0 && (
        <Text
          style={{
            position: 'absolute',
            color: '#ccc',
            paddingBottom: 160,
            fontSize: 40,
          }}
        >
          {numberAsStringWithExplicitSign(temp)}
        </Text>
      )}
      <OutlineText
        text={current}
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
    const current = getNextTotal(state, player);
    const temp = getTemp(state, player);
    const history = getHistoryString(state, player);

    return { color, current, temp, history };
  },
  function mapDispatchToProps(dispatch, { player }) {
    return {
      increment: () => dispatch(increment(player)),
      decrement: () => dispatch(decrement(player)),
    };
  }
)(CounterTile);

export { _CounterTile as CounterTile };
