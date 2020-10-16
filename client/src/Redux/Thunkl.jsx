const {redux,createStore,applyMiddleware}=require('redux')
const thunk=require('redux-thunk').default
const axios=require('axios')
const intste={
    data:[],
    load:false,
    err:'',
}
const Userreq=()=>{
    return{
        type:"Req",
        info:'User Request'
    }
}
const usersucc=(data)=>{
return{
    type:"Succ",
    info:data
}
}
const Usererr=(data)=>{
return{
    type:"Err",
    info:data
}
}
const Redu=(state=intste,action)=>{
    switch(action.type){
        case "Req":return{
            ...state,
            load:true,

        }
        case "Succ":return{
            load:false,
            data:action.info,
            err:''
        }
        case "Err":return{
            load:false,
            data:[],
            err:action.info
        }
    }
}
const Duck=()=>{
    return (dispatch)=>{
        dispatch(Userreq())
        axios.get('http://localhost:4100/get')
        .then((res)=>{
            const dat=res.data.map(dat=>dat.fnm)
            dispatch(usersucc(dat))
        })
        .catch((err)=>{
            dispatch(Usererr(err.message))
        })
    }
}
const store=createStore(Redu,applyMiddleware(thunk))
store.subscribe(
    ()=>{
        console.log(store.getState())
    }
)
store.dispatch(Duck())