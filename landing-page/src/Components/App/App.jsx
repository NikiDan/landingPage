import React, { useState } from "react";

import InfBlock from "../InfBlock";
import Content from "../Content";

import './style.css';

import { createStore } from "redux";

const defaultState = {
    pc: true,
    mobile: false,
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "pc":
            return { ...state, pc: state.pc + action.payload }
        case "mobile":
            return { ...state, mobile: state.mobile +action.payload }

        default:
            return state
    }
}

const store = createStore(reducer)

function App() {

    const [mobile, useMobile] = useState("");

  return (
    <div className="App">
      <InfBlock/>
      <Content mobile={mobile} useMobile={useMobile}/>
    </div>
  );
}

export default App;
