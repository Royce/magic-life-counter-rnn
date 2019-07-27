import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { getColorMap } from '../settings/selectors';
import { PLAYER_ONE, PLAYER_TWO } from '../constants';
import { ColorDot } from '../components';

// import { increment, decrement } from '../counter/actions';
// import { CounterTile } from '../counter/components';

function Heading({ children }) {
  return (
    <View
      style={[
        styles.borderBottom,
        { paddingHorizontal: padding, alignSelf: 'stretch', paddingBottom: 10 },
      ]}
    >
      <Text style={{ color: '#eee', fontSize: 50 }}>{children}</Text>
    </View>
  );
}

function ColorMenuItem({ text, color }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Navigation.showOverlay({
          component: {
            name: 'ColorPickerOverlay',
            options: {
              overlay: {
                interceptTouchOutside: true,
              },
            },
          },
        });
      }}
    >
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
        <Text style={{ color: 'white', fontSize: 20 }}>{text}</Text>
        <ColorDot radius={10} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const padding = 30;

function SettingsScreen({ colorMap }) {
  return (
    <View style={styles.container}>
      <View height={40} />
      <Heading>Settings</Heading>
      <ColorMenuItem text={'Opponent color'} color={colorMap[PLAYER_TWO]} />
      <ColorMenuItem text={'Your color'} color={colorMap[PLAYER_ONE]} />
    </View>
  );
}

function mapStateToProps(state) {
  return { counter: state.counter.counter, colorMap: getColorMap(state) };
}

export default connect(
  mapStateToProps,
  {}
)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  borderBottom: {
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
