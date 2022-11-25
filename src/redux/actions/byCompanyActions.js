import { ActionTypes } from '../contants/action-types';

export const setByCompany = ByCompany => {
  return {
    type: ActionTypes.SET_BY_COMPANY,
    payload: ByCompany,
  };
};
