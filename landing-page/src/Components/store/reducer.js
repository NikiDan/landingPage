const defaultState = {
    pc: null,
    mobile: null,
}

export const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "pc":
            return { ...state, pc: state.pc + action.payload }
        case "mobile":
            return { ...state, mobile: state.mobile +action.payload }

        default:
            return state
    }
};