export const createActuatorSelector = name => ({
  selectIsActivated: state => state[name].state
});
