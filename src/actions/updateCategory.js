export const updateCategory = (data, history, id) => dispatch => {
  const dataObj = { data: data, id: id };
  dispatch({ type: "UPDATE_CATEGORY", payload: dataObj });
  history.push("/");
};
