import React from 'react';
import { AsyncStorage, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import { checkForUpdates } from './versions/actions';
import KeepAwake from 'react-native-keep-awake';

import CounterScreen from './screens/CounterScreen';
import SettingsScreen from './screens/SettingsScreen';
import ColorPickerOverlay from './screens/ColorPickerOverlay';
import StartingPlayerOverlay from './screens/StartingPlayerOverlay';
import rootReducer from './rootReducer';

const persistedReducer = persistReducer(
  { key: 'root', storage: AsyncStorage },
  rootReducer
);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

Navigation.registerComponent(
  `WelcomeScreen`,
  () => WrappedComponent(CounterScreen),
  () => CounterScreen
);

Navigation.registerComponent(
  `SettingsScreen`,
  () => WrappedComponent(SettingsScreen),
  () => SettingsScreen
);

Navigation.registerComponent(
  `ColorPickerOverlay`,
  () => WrappedComponent(ColorPickerOverlay),
  () => ColorPickerOverlay
);

Navigation.registerComponent(
  `StartingPlayerOverlay`,
  () => WrappedComponent(StartingPlayerOverlay),
  () => StartingPlayerOverlay
);

export default function() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          options: {
            statusBar: {
              style: 'light',
            },
            sideMenu: {
              left: { width: Dimensions.get('window').width - 40 },
            },
          },
          left: {
            component: {
              name: 'SettingsScreen',
            },
          },
          center: {
            component: {
              name: 'WelcomeScreen',
            },
          },
        },
      },
    });

    store.dispatch(checkForUpdates());
    KeepAwake.activate();
  });
}
