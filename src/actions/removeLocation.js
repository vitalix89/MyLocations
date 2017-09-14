export const removeLocation = (categoryId, locationId, data, history) =>
  dispatch => {
    let items = JSON.parse(localStorage.getItem("testObject"));

    delete items[categoryId].locations[locationId];

    const fechedItems = JSON.stringify(items);

    localStorage.setItem("testObject", fechedItems);

    let newItems = JSON.parse(localStorage.getItem("testObject"));

    console.log("FETCH AFTER REMOVVVEEEEEE", newItems);

    if (Object.keys(newItems[categoryId].locations).length === 0) {
      dispatch({ type: "REMOVE_LOCATION", payload: {} });
    } else {
      dispatch({ type: "REMOVE_LOCATION", payload: newItems });
    }
    history.push(`/locations/${categoryId}`);
  };
