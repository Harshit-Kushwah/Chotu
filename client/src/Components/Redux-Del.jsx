import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Deldata,Updatedata} from '../Redux/GPD/function';
import $ from 'jquery'
 function Reducdel() {
const [delval,setUp]=useState({fnm:'',age1:'',city1:'',id:''})
const ws=useSelector(state=>state.del)
const dis=useDispatch()
const dell=(e)=>{
    e.preventDefault()
    let del=e.target.value
    dis(Deldata(del))

}

const upp=(e)=>{
    e.preventDefault()
   let up=e.target.value
   let upnam=e.target.name
 $(`#${up}`).find('input').show()
 $(`#${up}`).find('[data-del="del"],[data-up="up"]').next().show()
 $(`#${up}`).find('[data-del="del"],[data-up="up"],span').hide()
const dat=ws[upnam]
const {fnm,Age,city,id}=dat
setUp({fnm:fnm,age1:Age,city1:city,id:id})
console.log(delval)
}
const updata=(e)=>{
    e.preventDefault()
   dis(Updatedata(delval,delval.id))
   
}
const cann=(e)=>{
    e.preventDefault()
    let up=e.target.value
  $(`#${up}`).find('input').hide()
  $(`#${up}`).find('[data-del="del"],[data-up="up"]').next().hide()
  $(`#${up}`).find('[data-del="del"],[data-up="up"],span').show()
}
const vabu=(e)=>{
const {name,value}=e.target
setUp({...delval,[name]:value})
}
    return (        
        <>
          <h1>Redux Centerlize Del/Update Data</h1>
  {ws.map((a,b)=>{
      return <form key={b} id={a.id}>   <div className="row mt-3">
      <div className="col-xl-3"><span>{a.fnm}</span>    
      <input type="text" style={{display:"none"}} name="fnm" value={delval.fnm}  onChange={vabu} className="form-control"   ></input>
      </div> 
      <div className="col-xl-2"><span>{a.Age}</span>
      <input type="text" style={{display:"none"}} name="age1" value={delval.age1} onChange={vabu} className="form-control" ></input>
      </div> 
      <div className="col-xl-2"><span>{a.city}</span>
      <input type="text" style={{display:"none"}} name="city1" value={delval.city1} onChange={vabu} className="form-control"></input>
      </div> 
      <div className="col-xl-2">        
          <button type="submit" data-del="del" value={a.id} onClick={dell} className="btn btn-danger">Delete</button>    
          <button type="submit" style={{display:"none"}} onClick={updata} className="btn btn-primary">Update</button> 
      </div>
      <div className="col-xl-2">
          <button type="submit" data-up="up" onClick={upp} name={b} value={a.id} className="btn btn-success">Update</button>
          <button type="submit" style={{display:"none"}} onClick={cann} value={a.id} className="btn btn-dark">Cancel</button> </div>      
       </div>
       </form>
  })}
        </>
    )
}
export default Reducdel;