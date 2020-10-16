const { redux, createStore,combineReducers,applyMiddleware } = require('redux');
const intst={
    cig:10,
    man:5
}
function Cigg(){
    return{
        type:"Credit Amo",
        info:"Cigrate"
    }
}
function Mann(){
    return{
        type:"Credited Man",
        info:"Sell Gutkha"
    }
}
const Redu=(state=intst,action)=>{
    switch(action.type){
        case "Credit Amo":return{
            ...state,
            cig:state.cig-2
        }
        case "Credited Man":return{
            ...state,
            man:state.man-1
        }
        default:return state
    }
}
const Mainrade=combineReducers({
    Book:Redu
})
const log=store=>{
    return next=>{
        return action=>{
            const result=next(action)
            console.log("Middle where",result)
            return result
        }
    }
}
const store=createStore(Mainrade,applyMiddleware(log))
console.log("Intial State Value",store.getState())
const unsub = store.subscribe(
    ()=>{
        console.log("Update Value",store.getState())
    }
)
store.dispatch(Cigg())
store.dispatch(Cigg())
store.dispatch(Cigg())
store.dispatch(Mann())
store.dispatch(Mann())
store.dispatch(Mann())
unsub();