export const fetchLocalstorage = () => dispatch => {
  console.log("fetchLocalstorage");

  const retrievedObject = localStorage.getItem("testObject");

  const storageData = JSON.parse(retrievedObject);

  dispatch({ type: "FETCH_LOCALSTORAGE", payload: storageData });
};
