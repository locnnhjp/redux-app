import * as constants from "../config/const";

export const increment = (number = 1) => {
    return {
        type: constants.INCREMENT,
        payload: number,
    };
};

export const decrement = (number = 1) => {
    return {
        type: constants.DECREMENT,
        payload: number
    }
}