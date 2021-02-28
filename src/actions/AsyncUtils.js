/**
 * @param baseName action base name e.g. GET_TODOS
 * @return {object} an object with the three async action names
 */
export const asyncActionNames = (baseName) => ({
  failure: `${baseName}_FAILURE`,
  request: `${baseName}_REQUEST`,
  success: `${baseName}_SUCCESS`,
});

/**
 * @todo Specify example for action name
 */
/**
 * @param actionName {object}
 * @return {object} the three async object actions
 */
export const buildAsyncActions = (actionName) => ({
  request: (data) => ({
    type: actionName.request,
    data,
  }),
  failure: (error) => ({
    type: actionName.failure,
    error,
  }),
  success: (data) => ({
    type: actionName.success,
    data,
  }),
});
