import * as SIMPLE from '../actionTypes/Simple';

export function getSimple() {
  return {
    type: SIMPLE.GET_SIMPLE,
  };
}

export function getSimpleSucccess(simple) {
  return {
    type: SIMPLE.GET_SIMPLE_SUCCESS,
    simple,
  };
}

export function getSimpleFailure(error) {
  return {
    type: SIMPLE.GET_SIMPLE_FAILURE,
    error,
  };
}
