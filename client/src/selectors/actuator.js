export const createActuatorSelector = name => ({
  selectState: state => state[name].state,
  selectMode: state => state[name].mode
});
