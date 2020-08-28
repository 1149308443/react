import { makeActionCreator, makeAsyncActionCreator } from '@/utils/reduxUtil';
import { moduleStateActionCreator } from '../common/action';

const PREFIX = 'YCOMMENT';

/*
 * action 类型
 */
export const LOADDATA = `${PREFIX}_LOADDATA`;

/*
 * action 创建函数
 */
export const loadData = makeActionCreator(LOADDATA, 'state');

export const { setModuleState, SET_MODULE_STATE } = moduleStateActionCreator(PREFIX);
