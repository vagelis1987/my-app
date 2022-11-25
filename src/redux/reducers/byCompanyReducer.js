import { ActionTypes } from '../contants/action-types';

const initialState = {
  byCompany: [],
};

export const byCompanyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BY_COMPANY:
      return { ...state, byCompany: payload };
    default:
      return state;
  }
};

//byCompanyReducer
