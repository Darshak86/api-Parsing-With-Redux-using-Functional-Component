import {
  fetchDataSuccess,
  fetchDataBegin,
  fetchDataFailure
} from "../redux/actions/getDataAction";

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch("http://jsonplaceholder.typicode.com/todos")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDataSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchDataFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    console.log("handleErrors :", response);
    throw Error(response.statusText);
  }
  return response;
}
