import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CLEAR_DATA
} from '../actions/swapiActions';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
};

export default swapiReducer;