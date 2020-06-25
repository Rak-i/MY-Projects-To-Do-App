import * as SIMPLE from '../actionTypes/Simple';

const initialState = {
  simple: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE.GET_SIMPLE:
      return {
        ...state,
        isLoading: true,
      };
    case SIMPLE.GET_SIMPLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        simple: action.simple,
      };
    case SIMPLE.GET_SIMPLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
