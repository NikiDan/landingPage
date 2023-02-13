import React from 'react';

import InfBlockPc from "../InfBlock/InfBlockPc";
import ContentPc from "../ContentPage/ContentPc";

import './style.css';

// import { createStore } from "redux";
// import { Routes, Route } from 'react-router-dom';

// const defaultState = {
//     pc: true,
//     mobile: false
// }

// const reducer = (state = defaultState, action) => {
//     switch(action.type){
//         case "pc":
//             return { ...state, pc: state.pc }
//         case "mobile":
//             return { ...state, mobile: state.mobile }
//
//         default:
//             return state
//     }
// }

// const store = createStore(reducer)

const App = () => {

    return (
        <div className="App">
            <div className="appComponents">
                <InfBlockPc/>
                <ContentPc/>
            </div>
        </div>
    );
}

export default App;
