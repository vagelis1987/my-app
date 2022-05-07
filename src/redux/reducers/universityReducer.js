import {ActionTypes} from "../contants/action-types"

const initialState = {
  universities:[],
}

export const universityReducer = (state = initialState, {type,payload}) =>{
  switch (type){
    case ActionTypes.SET_UNIVERSITIES:
      return {...state, universities:payload};    
      default:
        return state;
  }

};
