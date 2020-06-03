import { makeActionCreator, makeAsyncActionCreator, createRequestTypes } from '@/utils/reduxUtil';
import { moduleStateActionCreator } from '../common/action';

const PREFIX = 'INDEX';
/**
 *  action 类型
 */
export const LOAD_DATA = createRequestTypes(`${PREFIX}_LOAD_DATA`);

export const SUBMIT = createRequestTypes(`${PREFIX}_SUBMIT`);

export const ADDSEND = createRequestTypes(`${PREFIX}_ADDSEND`);
/**
 * action 创建函数
 */
export const { setModuleState, SET_MODULE_STATE } = moduleStateActionCreator(PREFIX);

export const loadData = makeAsyncActionCreator(LOAD_DATA);

export const submit = makeAsyncActionCreator(SUBMIT);

export const addSend = makeAsyncActionCreator(ADDSEND);
