export const user_get_req="user_get_req"
export const user_get_suc="user_get_suc"
export const user_get_err="user_get_err"
export const user_get_post="user_get_err"
export const user_get_del="user_get_del"
export const user_get_up="user_get_up"
const intsta={
    load:false,
    del:[],
    err:'',
    dell:''
}

const reDucer1=(state=intsta,action)=>{
    switch(action.type){
        case user_get_req :return{
            ...state,
            load:true           
        }
case user_get_suc:return{
    ...state,
    load:false,
    del:action.info,
    err:''
}
case user_get_post:return{
    ...state,
    load:false,
    del:action.info,
    err:'',
    
}
case user_get_del:return{
    ...state,
    load:false,
    dell:action.info,
    err:'',
    
}
case user_get_up:return{
    ...state,
    load:false,
    dell:action.info,
    err:'',
    
}
case user_get_err :return{
load:false,
del:[],
err:action.info
}
default:return state
    }
}
export default reDucer1;