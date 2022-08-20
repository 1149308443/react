import HistoryUtil from './History';
import { TypeBuildOptions } from './typing';

export const historyUtil = new HistoryUtil({
  type: TypeBuildOptions.HASH
});

export const { history } = historyUtil;
