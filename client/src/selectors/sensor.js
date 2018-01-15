export const createSensorSelector = name => ({
  selectData: state => state[name].data
});
