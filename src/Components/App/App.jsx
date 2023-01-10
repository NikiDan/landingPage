import React from 'react';

import InfBlockPc from "../InfBlock/InfBlockPc";
import InfBlockMobile from "../InfBlock/InfBlockMobile";
import ContentPc from "../ContentPage/ContentPc";
import ContentMobile from "../ContentPage/ContentMobile";

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

    const pcMinWidth = 1262;
    const pcWidth = window.innerWidth;

  return (
        <div className="App">
            { pcWidth >= pcMinWidth ?
                <div className="pcVersion">
                  <InfBlockPc/>
                  <ContentPc/>
                </div>
                :
                <div className="mobileVersion">
                  <InfBlockMobile/>
                  <ContentMobile/>
                </div>
            }
        </div>
  );
}

export default App;
