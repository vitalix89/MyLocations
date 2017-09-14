export const addLocation = (data, history, categoryId) => dispatch => {
  const random = Math.floor(Math.random() * (6.3431144 - 2 + 1) * 10000000);

  const locationData = {
    categoryId: categoryId,
    locationId: random,
    name: data.name,
    address: data.address,
    location: data.location
  };

  dispatch({ type: "ADD_LOCATION", payload: locationData });
  history.push(`/locations/${categoryId}`);
};
