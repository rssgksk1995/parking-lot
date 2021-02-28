
import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../utils/StoreUtils';

const initialState = {
  carParkingSpace: null,
  bikeParkingSpace: null,
};

const initializeCarData = (state, action) => {
  return updateState(state, {
    carParkingSpace: action.data,
  });
};

const initializeBikeData = (state, action) => {
  return updateState(state, {
    bikeParkingSpace: action.data,
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_CAR_DATA.success:
      return initializeCarData(state, action);
    case actionTypes.INITIALIZE_BIKE_DATA.success:
      return initializeBikeData(state, action);

    default:
      return state;
  }
};

export default reducer;

