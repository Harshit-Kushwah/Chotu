import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Postdata} from '../Redux/GPD/function'
 function Reducxpost() {
const [values,setValues]=useState({fnm:'',age:'',city:''})
const dispatch=useDispatch()
   const posting=(e)=>{
         e.preventDefault()
        dispatch(Postdata(values))
        //console.log(values)
        setValues({fnm:'',age:'',city:''})
     }
 const pcng=(e)=>{
    const {name,value}=e.target
    setValues({...values,[name]:value})
 }
    return (
        <>
            <h1>Redux Centerlize Post Data</h1>                     
            <div className="col-md-12 p-0 mt-3" id="post-form">
             <form className="form-group" onSubmit={posting}>
             <div className="row">
             <div className="col-xl-1">Name</div>
             <div className="col-xl-4"><input type="text" className="form-control" value={values.fnm} onChange={pcng} name="fnm"></input></div>
             </div>
             <div className="row">
             <div className="col-xl-1">Age</div>
             <div className="col-xl-4"><input type="text" className="form-control" value={values.age} onChange={pcng}  name="age" ></input></div>
             </div>
             <div className="row">
             <div className="col-xl-1">City</div>
             <div className="col-xl-4"><input type="text" className="form-control" value={values.city}  onChange={pcng} name="city"></input></div>
             </div>
          <div className="row">
              <div className="col-xl-1"></div>
              <div className="col-xl-4 d-flex pl-0">
         
              <div className="col-xl-12">
                  <button type="submit" className="btn btn-primary">Insert</button>
                  
                  </div> 
              </div>
              </div>    
                 </form>   
                 </div>
           
      
        </>
    )
}
export default Reducxpost
