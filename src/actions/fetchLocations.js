export const fetchLocations = (categoryId, history) => dispatch => {
  dispatch({ type: "FETCH_CATEGORY_LOCATIONS", payload: categoryId });

  history.push(`./locations/${categoryId}`);
};
