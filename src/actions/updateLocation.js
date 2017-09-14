export const updateLocation = (data, history, locationId, categoryId) =>
  dispatch => {
    const dataObj = {
      data: data,
      locationId: locationId,
      categoryId: categoryId
    };
    dispatch({ type: "UPDATE_LOCATION", payload: dataObj });
    history.push(`/locations/${categoryId}`);
  };
