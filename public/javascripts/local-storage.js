//Funciones de LocalStorage
function setObject(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
function getObject(key) {
  var storage = window.localStorage,
      value = storage.getItem(key);
  return value && JSON.parse(value);
}
