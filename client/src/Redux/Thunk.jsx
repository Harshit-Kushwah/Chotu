const {redux,createStore,combineReducers,applyMiddleware}=require('redux')
const axios=require('axios')
const thunk=require('redux-thunk').default
const initsta={
    load:false,del:[],err:''
}
const user_Req=()=>{
    return{
        type:"Req",
        info:'Send Req'
    }
}
const user_Succ=(data)=>{
    return{
        type:"Succ",
        info:data
    }
}
const user_Err=(err)=>{
    return{
        type:'Err',
        info:err
    }
}
const redu=(state=initsta,action)=>{
    switch(action.type){
        case 'Req':return{
            ...state,
            load:true,
        }
        case 'Succ':return{
            load:false,
            del:action.info,err:''
        }
        case 'Err':return{
            load:false,
            dl:[],err:action.info
        }
    }
}
const thanku=()=>{
    return function(dispatch){
        dispatch(user_Req())
        axios.get('http://localhost:4500/get')
        .then((res)=>{
            const dat=res.data.map(dat=>dat)
            dispatch(user_Succ(dat))
        })
        .catch((err)=>{
            dispatch(user_Err(err.message))
        })
    }
}
const sell=createStore(redu,applyMiddleware(thunk))
sell.subscribe(
    ()=>{
        console.log(sell.getState())
    }
)
sell.dispatch(thanku())