import { createSelector } from 'reselect';
import CodePush from 'react-native-code-push';

import {
  CODE_PUSH_STATUS,
  APP_VERSION,
  PENDING_VERSION,
  LAST_CHECK,
  INSTALL_DATE,
} from './constants';

const getVersions = state => state.versions;

const getStatus = createSelector(
  getVersions,
  all => {
    switch (all[CODE_PUSH_STATUS]) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        return 'Checking for updates';
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        return 'Downloading updates';
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        return 'Update Installed';
      case CodePush.SyncStatus.UP_TO_DATE:
        return 'Up to date';
      default:
        break;
    }
  }
);

export const getSummary = createSelector(
  getStatus,
  getVersions,
  (status, all) => {
    return `status:${status}  version:${all[APP_VERSION]}  pending:${
      all[PENDING_VERSION]
    }  lastcheck:${all[LAST_CHECK]}  installed:${all[INSTALL_DATE]}`;
  }
);
