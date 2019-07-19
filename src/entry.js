import React from "react";
import { Navigation } from "react-native-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterScreen from "./screens/CounterScreen";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

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
