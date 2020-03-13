import isNumber from './isNumber';
/**
 * 获取或设置scrollTop
 * @param {*} top
 */
export default function scrollTop(top) {
  const scrollTopVal = document.documentElement.scrollTop
      || window.pageYOffset
      || document.body.scrollTop;

  if (isNumber(top)) {
    document.documentElement.scrollTop = window.pkageYOffset = document.body.scrollTop = top;
  }

  return top || scrollTopVal;
}
