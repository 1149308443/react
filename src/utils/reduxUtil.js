import { createSelector } from 'reselect';

/**
 * @description Action Creators 生成器
 * @param {string} type
 * @param {arguments} argNames 参数列表
 * @returns {Function}
 */
export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type, payload: {} };

  argNames.forEach((arg, index) => {
    action.payload[argNames[index]] = args[index];
  });

  return action;
};

/**
 * @description 创建 异步 Action types
 * @param {string} actionType
 * @returns {object} 返回{REQUEST,SUCCESS,FAILURE}type值
 */
export const createRequestTypes = (actionType) => ({
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`
});

/**
 * @description 异步 Action Creators 生成器
 * @param {object} param {REQUEST,SUCCESS,FAILURE}
 * @returns {object} 返回{request,success,failure} Action Creators 生成器
 */
export const makeAsyncActionCreator = ({ REQUEST, SUCCESS, FAILURE }) => ({
  request: (payload) => ({
    type: REQUEST,
    payload
  }),
  success: (payload) => ({
    type: SUCCESS,
    payload
  }),
  failure: (payload) => ({
    type: FAILURE,
    payload
  })
});

/**
 * @description Reducers 生成器
 * @param {object} initialState state初始化默认值
 * @param {function} handlers reducer执行函数
 * @returns {object} 返回新的state
 */
export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  if (action.type in handlers) {
    return handlers[action.type](state, action);
  }
  return state;
};

/**
 * state 计算衍生器
 * @param argNames
 * @param callback
 */
export const makeCreateSelector = (argNames = [], callback) => {
  const inputSelectors = argNames.map((item) => {
    if (Object.prototype.toString.call(item) === '[object Function]') {
      return item;
    } if (Object.prototype.toString.call(item) === '[object String]') {
      return (state) => state[item];
    }
    throw new Error('makeCreateSelector参数不是有效的值');
  });
  return createSelector(inputSelectors, callback);
};
