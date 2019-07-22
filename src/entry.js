import React from "react";
import { AsyncStorage } from "react-native";
import { Navigation } from "react-native-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import CounterScreen from "./screens/CounterScreen";
import rootReducer from "./rootReducer";

const persistedReducer = persistReducer(
  { key: "root", storage: AsyncStorage },
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

export default function() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: "WelcomeScreen"
        }
      }
    });
  });
}
