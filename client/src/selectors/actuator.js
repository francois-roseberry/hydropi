export const createActuatorSelector = name => ({
  selectIsActivated: state => state[name].state,
  selectMode: state => state[name].mode
});
