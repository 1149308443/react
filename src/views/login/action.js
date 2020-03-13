import { makeActionCreator } from '@/utils/reduxUtil';
import { moduleStateActionCreator } from '../common/action';

const PREFIX = 'LOGIN';

/*
 * action 类型
 */
export const SUBMIT = `${PREFIX}_SUBMIT`;

/*
 * action 创建函数
 */
export const submit = makeActionCreator(SUBMIT, 'info');

export const { setModuleState, SET_MODULE_STATE } = moduleStateActionCreator(PREFIX);

export { navTo, setCommonState } from '../common/action';
