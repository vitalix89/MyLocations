export const editCategory = (id, history, data) => dispatch => {
  history.push(`/editCategory/${id}`, data); // how you get here?
};
