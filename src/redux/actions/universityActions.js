import {ActionTypes} from '../contants/action-types'

export const setUniversity = (universities) =>{
  return{
    type:ActionTypes.SET_UNIVERSITIES,
    payload:universities,
  };
};

