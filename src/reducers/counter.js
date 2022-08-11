import * as constants from "../config/const";
const counter = (state = 0, action) => {
    switch (action.type) {
        case constants.INCREMENT:
            return state + action.payload;
        case constants.DECREMENT:
            return state - action.payload >= 0 ? state - action.payload : state;
        default:
            return state;
    }
};

export default counter;
