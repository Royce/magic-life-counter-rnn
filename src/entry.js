import React from "react";
import { Navigation } from "react-native-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import CounterScreen from "./screens/CounterScreen";
import ContactsScreen from "./screens/ContactsScreen";
import rootReducer from "./rootReducer";
import { refresh } from "./contacts/actions";

const store = createStore(rootReducer, applyMiddleware(thunk));

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
  `ContactsMenu`,
  () => WrappedComponent(ContactsScreen),
  () => ContactsScreen
);

export default function() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          right: {
            component: {
              name: "ContactsMenu"
            }
          },
          center: {
            component: {
              name: "WelcomeScreen"
            }
          }
        }
      }
    });

    store.dispatch(refresh());
  });
}
