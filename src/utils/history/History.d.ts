import { History, MemoryHistory } from 'history';
import { ConfigBuildOptions } from './typing';
export default class HistoryUtil {
    private config;
    history: History | MemoryHistory;
    constructor(opts?: ConfigBuildOptions);
    initHistory(opts?: ConfigBuildOptions): void;
}
