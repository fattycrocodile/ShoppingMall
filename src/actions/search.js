import * as types from '../constants/types';

const searchPhone = (text) => (dispatch) => {
    dispatch({
        type: types.search.PHONE,
        payload: text
    });
};

export default searchPhone;