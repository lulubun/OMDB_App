import * as constants from './constants';

const initialState = {
    results: [],
    title: null,
}

const moviesState = (state=initialState, action) => {
    switch (action.type) {
      case constants.SET_RESULTS: {
        return {
            ...state,
            results: action.res,
            title: action.title,
        }
      }
      default:
      return state
    }
}

export default moviesState