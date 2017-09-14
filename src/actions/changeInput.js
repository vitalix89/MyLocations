export const changeInput = data => dispatch => {
  dispatch({ type: "INPUT_UPDATE", payload: data });
};
