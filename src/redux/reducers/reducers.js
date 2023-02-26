import {combineReducers} from "redux";

const myTextReducer = (state = null, action) => {
    switch(action.type) { //action ist das mitgegebene Objekt - type ist einfach nur ein Feld
        case "SET_MY_TEXT" : return action.payload;
        default: return state;
    }
}

const myCounterReducer = (state = null, action) => {
    switch(action.type) { //action ist das mitgegebene Objekt - type ist einfach nur ein Feld
        case "SET_COUNTER" : return action.payload;
        default: return state;
    }
}

const allReducers = combineReducers({
    text: myTextReducer,
    counter: myCounterReducer
})

export default allReducers;