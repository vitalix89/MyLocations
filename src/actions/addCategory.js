export const addCategory = (data, history) => dispatch => {
  const random = Math.floor(Math.random() * (6.3431144 - 2 + 1) * 10000000);

  const locationData = {
    id: random,
    name: data.name
  };

  console.log("action addCategory called", data);
  dispatch({ type: "ADD_CATEGORY", payload: locationData });
  history.push("./");
};
