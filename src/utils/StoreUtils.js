import store from '../store';

export const updateState = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const loadingSelector = actionTypes => {
  const loadingState = store.getState().loading;

  actionTypes.forEach(actionType => {
    if (!Object.prototype.hasOwnProperty.call(loadingState, actionType)) {
      loadingState[actionType] = true;
    }
  });

  return loadingState;
};