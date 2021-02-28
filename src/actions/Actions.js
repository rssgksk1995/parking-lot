import * as actionTypes from "./actionTypes";
import { buildAsyncActions } from "./AsyncUtils";

export const initializeCarData = buildAsyncActions(actionTypes.INITIALIZE_CAR_DATA);
export const initializeBikeData = buildAsyncActions(actionTypes.INITIALIZE_BIKE_DATA);