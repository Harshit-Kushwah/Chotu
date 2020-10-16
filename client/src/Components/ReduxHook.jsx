import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {sell} from '../Redux/Main-function'
 function ReduxHook() {
    const [name,setName]=useState(1)
     const book= useSelector(state=>state.book)
     const dispatch=useDispatch()    
    return (
        <>
         <h1 className='mt-2'>Hook Container</h1>   
         <p className="mb-2"><b>Number of Book {book} </b></p>
         <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
            <button type="submit" onClick={()=>dispatch(sell(name))} className="btn btn-light">Click {name} Here</button> 
        </>
    )
}
export default ReduxHook;