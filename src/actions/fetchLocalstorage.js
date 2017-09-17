export const fetchLocalstorage = () => dispatch => {


  const retrievedObject = localStorage.getItem("testObject");

  const storageData = JSON.parse(retrievedObject);

  dispatch({ type: "FETCH_LOCALSTORAGE", payload: storageData });
};
