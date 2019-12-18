export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type, payload: {} };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};
