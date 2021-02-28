const ignoreActionTypes = [];

function monitorableAction(action) {
  return (
    action.type.includes('REQUEST') &&
    ignoreActionTypes.every(fragment => !action.type.includes(fragment))
  );
}

export default monitorableAction;