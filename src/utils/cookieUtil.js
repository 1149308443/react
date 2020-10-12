/**
 * 根据传入的cookie获取指定cookie的值
 * @param {*} key
 * @param {*} cookie
 */
export const getCookie = (key, cookie) => {
  if (!cookie && typeof window === 'undefined') {
    return '';
  }
  const matched = (cookie || window.document.cookie).match(
    new RegExp(`(?:^|;)\\s?${key}=(.*?)(?:;|$)`)
  );

  return matched ? matched[1] || '' : '';
};

/**
 * 设置cookie
 * @param {*} key
 * @param {*} value
 * @param {*} cookie
 */
export const setCookie = (key, value, maxAge, cookie) => {
  if (typeof window === 'undefined') {
    /* eslint-disable no-param-reassign */
    cookie.set(key, value, {
      maxAge
    });
  } else {
    window.document.cookie = `${key}=${value}; expires=${new Date(
      new Date().valueOf() + maxAge
    ).toGMTString()}`;
  }
};


/**
 * 设置localStorage
 * @param {string} key
 * @param {string} value
 */
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * 获取localStorage
 * @param {string} key
 */
export const getLocalStorage = (key) => {
  localStorage.getItem(key);
};

/**
 * 设置sessionStorage
 * @param {string} key
 * @param {string} value
 */
export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value);
};

/**
 * 获取sessionStorage
 * @param {string} key
 */
export const getSessionStorage = (key) => {
  sessionStorage.getItem(key);
};