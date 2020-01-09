import { makeActionCreator } from '@/utils/reduxUtil';
/*
 * action 类型
 */

// action前缀
const PREFIX = 'DEMO';

export const ADD_TODO = `${PREFIX}_ADD_TODO`;
export const TOGGLE_TODO = `${PREFIX}_TOGGLE_TODO`;
export const SET_VISIBILITY_FILTER = `${PREFIX}_SET_VISIBILITY_FILTER`;

/*
 * action 创建函数
 */

export const addTodo = makeActionCreator(ADD_TODO, 'text');

export const toggleTodo = makeActionCreator(TOGGLE_TODO, 'id');

export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter');
