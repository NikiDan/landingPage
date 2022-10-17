import React from "react";
import {Provider} from "react-redux";
import {store} from "../store";

import InfBlock from "../InfBlock";
import Content from "../Content";

import './style.css';


function App() {

  return (
    <div className="App">
        <Provider store={store}>
            <InfBlock/>
            <Content/>
        </Provider>
    </div>
  );
}

export default App;
