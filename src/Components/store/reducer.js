const defaultState = {
    clientWindow: document.documentElement.clientWidth,
    mobile: 1261,
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "clientWindow":
            return {...state, clientWindow: state.clientWindow}

        default:
            return state
    }
};