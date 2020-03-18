import { makeActionCreator } from '@/utils/reduxUtil';
import { moduleStateActionCreator } from '../common/action';

const PREFIX = 'INDEX';
/**
 *  action 类型
 */
export const LOAD_DATA = `${PREFIX}_LOAD_DATA`;
/**
 * action 创建函数
 */
export const { setModuleState, SET_MODULE_STATE } = moduleStateActionCreator(PREFIX);

export const loadData = makeActionCreator(LOAD_DATA);
