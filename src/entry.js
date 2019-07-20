import React from "react";
import { AsyncStorage } from "react-native";
import { Navigation } from "react-native-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import CounterScreen from "./screens/CounterScreen";
import ContactsScreen from "./screens/ContactsScreen";
import rootReducer from "./rootReducer";
import { refresh } from "./contacts/actions";

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
