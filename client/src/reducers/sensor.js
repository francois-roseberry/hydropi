export const createSensorReducer = readingActionType => (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case readingActionType:
      return { ...state, data: appendReading(state.data, action.reading) };
    default:
      return state;
  }
}

const INITIAL_STATE = { data: [] };

export const appendReading = (data, reading) => {
  let newData = data.concat([reading]);
  newData = newData.slice(Math.max(newData.length - 4, 0));
  return newData;
}
