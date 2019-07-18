import React from "react";
import { Navigation } from "react-native-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, counter: state.counter + 1 };
    }
    default: {
      return state;
    }
  }
};
const store = createStore(reducer);

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
  () => WrappedComponent(App),
  () => App
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "WelcomeScreen"
      }
    }
  });
});
