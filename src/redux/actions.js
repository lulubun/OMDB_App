
import * as constants from './constants';

const API_URL = 'http://www.omdbapi.com/?apikey=f86c0e32&s='

export const setResults = (title, res) => {
    return ({
        type: constants.SET_RESULTS,
        title,
        res,
    })
}

export const startSearch = (searchTerm) => {
    console.log('searchTerm: ', searchTerm);
    return dispatch => {
    const encodedTerm = encodeURIComponent(searchTerm);
    const fetchUrl = `${API_URL}${encodedTerm}&r=json`;
    fetch(fetchUrl)
    .then((r) => r.json())
    .then(resp => {
        if (resp.Response === 'True') {
            dispatch(setResults(searchTerm, resp.Search))
        } else {
            alert(resp.Error)
        }
    })
    .catch((e) => console.log(e))
    }
}
