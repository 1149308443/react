import { makeActionCreator } from '@/utils/reduxUtil';

export const PREFIX = 'COMMON';
/*
 * action 类型
 */
export const NAV_TO = `${PREFIX}_NAV_TO`;

export const REDIRECT_TO = `${PREFIX}_REDIRECT_TO`;

export const SHOW_MODAL = `${PREFIX}_SHOW_MODAL`;

export const SHOW_MESSAGE = `${PREFIX}_SHOW_MESSAGE`;

export const CLEAR_MESSAGE = `${PREFIX}_CLEAR_MESSAGE`;

export const SET_COMMON_STATE = `${PREFIX}_SET_COMMON_STATE`;

/*
 * action 创建函数
 */
export const navTo = makeActionCreator(NAV_TO, 'path', 'useReplace', 'option');

export const redirectTo = makeActionCreator(REDIRECT_TO, 'path');

export const showModal = makeActionCreator(SHOW_MODAL, 'visible');

export const showMessage = makeActionCreator(SHOW_MESSAGE, 'msg', 'msgType');

export const clearMessage = makeActionCreator(CLEAR_MESSAGE);

export const setCommonState = makeActionCreator(SET_COMMON_STATE, 'state');


export const moduleStateActionCreator = (moduleName = 'UNKNOW') => {
  const SET_MODULE_STATE = `SET_${moduleName}_MODULE_STATE`;

  return {
    SET_MODULE_STATE,
    setModuleState: makeActionCreator(SET_MODULE_STATE, 'state')
  };
};
