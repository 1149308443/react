/**
 * 获取URL中的参数
 * @param {*} key 参数名称
 */
export default function getUrlQuery(key) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (pair[0] === key) { return pair[1]; }
  }
  return (false);
}
