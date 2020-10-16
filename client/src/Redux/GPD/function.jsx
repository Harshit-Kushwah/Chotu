import {user_get_req} from './Usertype'
import {user_get_suc} from './Usertype'
import {user_get_err} from './Usertype'
import {user_get_post} from './Usertype'
import {user_get_del} from './Usertype'
import {user_get_up} from './Usertype'
import $ from 'jquery'
import axios from 'axios'
const Reqq=()=>{
    return{
        type:user_get_req,
        info:"Reg"
    }
}
const Succ=(data)=>{
    return{
        type:user_get_suc,
        info:data
    }
}
const Err=(err)=>{
    return{
        type:user_get_err,
        info:err
    }
}
const Post=(data)=>{
return{
    type:user_get_post,
    info:data
}}
const Deall=(data)=>{
    return{
        type:user_get_del,
        info:data
    }
}
const Updat=(data)=>{
    return{
        type:user_get_up,
        info:data
    }
}
export const Fetchdata=()=>{
    return (dispatch)=>{
dispatch(Reqq)
$("#loader").css({"display":"flex"})
$("#root").addClass("is_blir")
axios.get('/get')
.then((res)=>{
    $("#loader").removeAttr("style")
    $("#root").removeClass("is_blir") 
    const dar=res.data
    dispatch(Succ(dar))
    console.log("fsdfdfdsfs")
})
.catch((err)=>{
    //console.log(err.message)
    dispatch(Err(err))
})
    }
}
export const Postdata=(data)=>{
return (dispatch)=>{
dispatch(Reqq)
$("#loader").css({"display":"flex"})
$("#root").addClass("is_blir")
//console.log(data)
axios.post('/post',data)
.then((res)=>{
    const post=res.data
   if(post==='Post'){
    $("#loader").removeAttr("style")
    $("#root").removeClass("is_blir") 
    dispatch(Post(post)) 
    axios.get('/get')
.then((res)=>{
    $("#loader").removeAttr("style")
    $("#root").removeClass("is_blir") 
    const dar=res.data
    dispatch(Succ(dar))
})
.catch((err)=>{
    //console.log(err.message)
    dispatch(Err(err))
})   
   }
})
.catch((err)=>{
    dispatch(Err(err))
})
    }
}
export const Deldata=(data)=>{
    return (dispatch)=>{
    dispatch(Reqq)
    $("#loader").css({"display":"flex"})
    $("#root").addClass("is_blir")
    //console.log(data)
    axios.delete(`/del/${data}`)
    .then((res)=>{
        const post=res.data
       if(post==='del'){
        $("#loader").removeAttr("style")
        $("#root").removeClass("is_blir") 
        dispatch(Deall(post)) 
        axios.get('/get')
    .then((res)=>{
        $("#loader").removeAttr("style")
        $("#root").removeClass("is_blir") 
        const dar=res.data
        dispatch(Succ(dar))
    })
    .catch((err)=>{
        //console.log(err.message)
        dispatch(Err(err))
    })   
       }
    })
    .catch((err)=>{
        dispatch(Err(err))
    })
        }
    }
    export const Updatedata=(data,id)=>{
        return (dispatch)=>{
        dispatch(Reqq)
        $("#loader").css({"display":"flex"})
        $("#root").addClass("is_blir")
        //console.log(id)
        axios.put(`/update/${id}`,data)
        .then((res)=>{
            const post=res.data
           if(post==='Update'){
            $(`#${id}`).find('input').hide()
            $(`#${id}`).find('[data-del="del"],[data-up="up"]').next().hide()
            $(`#${id}`).find('[data-del="del"],[data-up="up"],span').show()   
            $("#loader").removeAttr("style")
            $("#root").removeClass("is_blir") 
            dispatch(Updat(post)) 
            axios.get('/get')
        .then((res)=>{
            $("#loader").removeAttr("style")
            $("#root").removeClass("is_blir") 
            const dar=res.data
            dispatch(Succ(dar))
        })
        .catch((err)=>{
            dispatch(Err(err))
        })   
           }
        })
        .catch((err)=>{
            dispatch(Err(err))
        })
            }
        }