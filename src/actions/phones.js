import {
    fetchPhones as fetchPhonesApi,
    loadMorePhones as loadMorePhonesApi
} from '../api/index';
import * as types from '../constants/types';
import { getRenderedPhonesLength } from '../selectors';

export const fetchPhones = () => async (dispatch) => {

    dispatch({
        type: types.phones.START
    });

    try {
        const phones = await fetchPhonesApi();

        dispatch({
            type: types.phones.SUCCESS,
            payload: phones
        });
    } catch (err) {
        dispatch({
            type: types.phones.FAILURE,
            payload: err,
            error: true
        });
    }
};

export const loadMorePhones = () => async (dispatch, getState) => {

    const offset = getRenderedPhonesLength(getState());

    dispatch({
        type: types.phones.LOAD_MORE_START
    });

    try {
        const phones = await loadMorePhonesApi({ offset });

        dispatch({
            type: types.phones.LOAD_MORE_SECCESS,
            payload: phones
        });
    } catch (err) {
        dispatch({
            type: types.phones.LOAD_MORE_FAILURE,
            payload: err,
            error: true
        });
    }
};