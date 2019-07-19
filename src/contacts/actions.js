import Contacts from "react-native-contacts";
import { Platform, PermissionsAndroid } from "react-native";
import _ from "lodash";

import {
  UNKNOWN,
  AUTHORIZED,
  DENIED_PERMANENT,
  PERMISSION,
  DENIED,
  LOADING,
  LIST
} from "./constants";

export function load() {
  console.log(`load`);
  return async function load_async(dispatch, getState) {
    dispatch({ type: LOADING, value: true });
    console.log(`loading: true`, getState());

    try {
      Contacts.getAllWithoutPhotos(async (err, contacts) => {
        console.log(`getAll -> `, err, contacts);
        if (!err) {
          const filteredContacts = _.map(contacts, c => {
            const name = `${c.givenName} ${c.familyName}`;
            return { key: name, name };
          });
          // Filter contacts here ...
          console.log(`save cons`, filteredContacts);
          dispatch({ type: LIST, value: filteredContacts });
        }
        console.log(`loading: done`, getState());
      });
    } catch (ex) {
      console.log(ex);
    }
  };
}

export function refresh() {
  return async function refresh_async(dispatch, getState) {
    Platform.select({
      ios: checkPermission_ios,
      android: checkPermission_android
    })(permission => {
      dispatch({ type: PERMISSION, value: permission });
      if (permission === AUTHORIZED) {
        dispatch(load());
      }
    });
  };
}

export function request() {
  return async function request_async(dispatch, getState) {
    console.log("Making request");
    Platform.select({
      ios: requestPermission_ios,
      android: requestPermission_android
    })(permission => {
      console.log(`result: ${permission}`);
      dispatch({ type: PERMISSION, value: permission });
      if (permission === AUTHORIZED) {
        dispatch(load());
      }
    });
  };
}

function checkPermission_ios(setPermission) {
  try {
    Contacts.checkPermission((err, permission) => {
      if (permission === "undefined") {
        setPermission(UNKNOWN);
      }
      if (permission === "authorized") {
        setPermission(AUTHORIZED);
      }
      if (permission === "denied") {
        setPermission(DENIED_PERMANENT);
      }
    });
  } catch (ex) {
    console.log(ex);
    setPermission(UNKNOWN);
  }
}

function requestPermission_ios(setPermission) {
  try {
    Contacts.requestPermission((err, permission) => {
      if (permission === "authorized") {
        setPermission(AUTHORIZED);
      }
      if (permission === "denied") {
        setPermission(DENIED_PERMANENT);
      }
    });
    // setPermission(REQUESTED);
  } catch (ex) {
    console.log(ex);
  }
}

function requestPermission_android(setPermission) {
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    // {
    //   'title': 'View Contacts',
    //   'message': 'So we can add your friends to the team.'
    // }
  )
    .then(result => {
      switch (result) {
        case "granted":
          setPermission(AUTHORIZED);
          break;
        case "denied":
          setPermission(DENIED);
          break;
        case "never_ask_again":
          setPermission(DENIED_PERMANENT);
          break;
        default:
          console.log(`Unexpected permision result: ${result}`);
      }
    })
    .catch(reason => {
      console.log(reason);
    });
}

function checkPermission_android(setPermission) {
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
    .then(authorized => {
      if (authorized) setPermission(AUTHORIZED);
    })
    .catch(reason => {
      console.log(reason);
    });
}
