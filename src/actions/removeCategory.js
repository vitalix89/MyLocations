export const removeCategory = (id, history) => dispatch => {
  let items = JSON.parse(localStorage.getItem("testObject"));

  delete items[id];

  const fetchedItems = JSON.stringify(items);

  localStorage.setItem("testObject", fetchedItems);

  let newItems = JSON.parse(localStorage.getItem("testObject"));

  dispatch({ type: "REMOVE_CATEGORY", payload: newItems });
  history.push("/");
};
