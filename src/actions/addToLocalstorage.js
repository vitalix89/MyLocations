export const addToLocalstorage = data => dispatch => {
  if (Object.keys(data).length !== 0) {
    const toStorage = data;
    localStorage.setItem("testObject", JSON.stringify(toStorage));
  }
};
