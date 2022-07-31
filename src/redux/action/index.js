import axios from 'axios';

const API_URL = 'https://randomuser.me/api/'

export const simpleAction = () => async (dispatch) => {
    try {
        const payload = {
            results: 28
        }
        const res = await axios.get(API_URL, { params: payload });
        console.log(res.data);
        dispatch({ type: 'GET_PERSONNEL_DATA', payload: res.data.results})
    }
    catch(e) {
        console.log(e)
    }
}