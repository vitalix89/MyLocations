export const addCategory = (data, history) => dispatch => {
  const random = Math.floor(Math.random() * (6.3431144 - 2 + 1) * 10000000);

  const locationData = {
    id: random,
    name: data.name
  };


  dispatch({ type: "ADD_CATEGORY", payload: locationData });
  history.push("./");
};
