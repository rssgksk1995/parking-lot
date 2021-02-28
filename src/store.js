import { createStore, combineReducers } from "redux";

import { parkingLot } from "../src/reducers";

const appReducer = combineReducers({
	parkingLot
});

const store = createStore(
	appReducer
);
export default store;
