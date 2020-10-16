const { redux, combineReducers, createStore, applyMiddleware } = require('redux')

const initState = {
    bookNum: 12,
    str: "Tinku",
    pen: 10,
}
const intPan = {
    panMasala: 30
}
const intCig = {
    ciGrate: 12
}

function BuyBook() {
    return {
        type: "buy_Book",
        info: "Redux Action"
    }
}

function Pen() {
    return {
        type: "buy_Pen",
        info: "Redux Sec Action"
    }
}

function Masala() {
    return {
        type: "Sell_pan",
        info: "PanMasala"
    }
}

function Cig() {
    return {
        type: "Sell_cig",
        info: "Cig"
    }
}

const pan = (state = intPan, action) => {
    switch (action.type) {
        case "Sell_pan":
            return {
                ...state,
                panMasala: state.panMasala - 2
            }
        default:
            return state
    }
}

const cig = (state = intCig, action) => {
    switch (action.type) {
        case "Sell_cig":
            return {
                ...state,
                ciGrate: state.ciGrate - 3
            }
        default:
            return state
    }
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "buy_Book":
            return {
                ...state,
                bookNum: state.bookNum - 1
            }
        case "buy_Pen":
            return {
                ...state,
                pen: state.pen - 2
            }
        default:
            return state
    }
}
const mainReducer = combineReducers({
    pani: pan,
    cegi: cig,
    Book: Reducer
})
const log = store => {
    return next => {
        return action => {
            const result = next(action)
            console.log("Middle Where", result)
            return result
        }
    }
}
const store = createStore(mainReducer, applyMiddleware(log));
console.log("Initial State Value", store.getState());
const unsubscribe = store.subscribe(
    () => {
        console.log("Updated Book Value", store.getState())
    }
)
store.dispatch(Masala())
store.dispatch(Masala())
store.dispatch(Cig())
store.dispatch(Cig())
store.dispatch(BuyBook())
store.dispatch(Pen())
unsubscribe();