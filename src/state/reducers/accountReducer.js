// action is what we receive to do and we finally update the state
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;