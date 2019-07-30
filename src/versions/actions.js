import CodePush from 'react-native-code-push';

import {
  CODE_PUSH_STATUS,
  INSTALL_DATE,
  LAST_CHECK,
  APP_VERSION,
  PENDING_VERSION,
} from './constants';

export function checkForUpdates({ manual = false } = {}) {
  return async function(dispatch, getState) {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.ON_NEXT_RESUME,
        checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
      },
      status => {
        dispatch(codePushStatusDidChange(status));
      },
      undefined,
      update => {
        dispatch(
          setPendingVersion(
            `([version mismatch] ${update.appVersion} ${update.label} ${
              update.description
            })`
          )
        );
      }
    );
    if (!manual) {
      setTimeout(() => {
        dispatch(checkForUpdates());
      }, 60000);
    }
  };
}

function codePushStatusDidChange(status) {
  return async function(dispatch, getState) {
    dispatch({ type: CODE_PUSH_STATUS, value: status });
    console.log(`${CODE_PUSH_STATUS} -> ${status}`);

    switch (status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        dispatch(setLastCheckForUpdate(new Date()));
        console.log('Checking for update...');
        break;

      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installng');

        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        CodePush.getUpdateMetadata().then(update => {
          if (update) {
            console.log('Up to date: ' + update.description);
            dispatch(setAppVersion(update.description));
          } else {
            console.log('Up to date, latest binary.');
          }
        });

        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        dispatch(recordInstallDate());
        console.log('Restart GetSport to finish update');
        CodePush.getUpdateMetadata(CodePush.UpdateState.PENDING).then(
          update => {
            if (update) {
              dispatch(setPendingVersion(update.description));
            }
          }
        );
        break;
    }
  };
}

function setPendingVersion(version) {
  return { type: PENDING_VERSION, value: version };
}

function setAppVersion(version) {
  return { type: APP_VERSION, value: version };
}

function recordInstallDate() {
  return { type: INSTALL_DATE, value: new Date() };
}

function setLastCheckForUpdate(date) {
  return { type: LAST_CHECK, value: date };
}
