import * as R from 'ramda';

import * as types from '../constants/types';
import initialState from '../constants/initialState';

export default (state = initialState.basket, { type, payload }) => {
    switch (type) {
        case types.basket.ADD:
            return R.append(payload, state);
        case types.basket.REMOVE:
            return R.without(R.of(payload), state);
        case types.basket.CLEAN:
            return initialState.basket;
        default:
            return state;
    }
};