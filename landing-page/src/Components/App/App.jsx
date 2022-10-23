import InfBlockPc from "../InfBlockPc";
import InfBlockMobile from "../InfBlockMobile";
import ContentPc from "../ContentPc";
import ContentMobile from "../ContentMobile";

import './style.css';

import { createStore } from "redux";

const pcMinWidth = 1262;
const pcWidth = window.innerWidth;

const defaultState = {
    pc: true,
    mobile: false
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "pc":
            return { ...state, pc: state.pc }
        case "mobile":
            return { ...state, mobile: state.mobile }

        default:
            return state
    }
}

const store = createStore(reducer)

const App = () => {

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
