/**
 *
 * @param {*} url  api end point
 * @param {*} param options
 */
const apiRequest = (url, param) => {
  return fetch(url, param);
};

// expose methods, We can add update, delete as well
export { apiRequest };
