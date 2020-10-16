const {redux,createStore,combineReducers,applyMiddleware}=require('redux')
const initsta1={
Tota:12
}
const initsta2={
    cat:5
}
function Tota_sell(){
    return{
        type:"Tota-sell",
        info:'Debited Tota'
    }
}
function Cat_sell(){
    return{
        type:'Catl-sell',
        info:"Debited Cat"
    }
}

const Totared=(state=initsta1,action)=>{
    switch(action.type){
        case "Tota-sell":return{
            ...state,
            Tota:state.Tota-2
        }
        default:
            return state
    }
}

const Catred=(state=initsta2,action)=>{
    switch(action.type){
        case "Catl-sell":return{
            ...state,
            cat:state.cat-1
        }
        default:
            return state
    }
}

const mainRed=combineReducers({
Parrot:Totared,
Meow:Catred
})
const logged=sellpur=>{
    return next=>{
        return action=>{
            const resu=next(action)
            console.log(resu)
            return resu
        }
    }
}
const sellpur=createStore(mainRed,applyMiddleware(logged))
console.log("Main Value",sellpur.getState())
const unsub=sellpur.subscribe(
    ()=>{
        console.log("Updated Value",sellpur.getState())
    }
)
sellpur.dispatch(Tota_sell())
sellpur.dispatch(Cat_sell())
unsub()
