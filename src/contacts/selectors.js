import { createSelector } from "reselect";
import _ from "lodash";

import { NAME, LOADING, PERMISSION, LIST } from "./constants";

const _getList = state => state[NAME][LIST];

export const getList = createSelector(
  _getList,
  list => {
    return _.isArray(list) ? [...list, { key: "fake", name: "Fake" }] : [];
  }
);

export const getPermission = state => state[NAME][PERMISSION];

export const isLoading = state => state[NAME][LOADING];
