import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const fetchPersonById = (id) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};