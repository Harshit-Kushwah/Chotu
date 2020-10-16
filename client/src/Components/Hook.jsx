import React,{useState,useEffect} from 'react'
import Menu from './Nav'
import Custom from './Hook-Custom'
import axios from 'axios'
import Hookmy from './Hook-test'
function Huks(){
    const dat=Custom();
    const [name,SetName]=useState("Rahul Kushwah")
    const [age,SetAge]=useState(31)
    const [age2,SetAge2]=useState(31)
    const [list,Setlist]=useState([])
    const updateval=()=>{
        SetName("Spidey Kushwah")
        SetAge(age+1)
    }
    const minus=()=>{
        SetAge2(age2-1)
    }
  useEffect(() => {
      console.log("Use Effect Calling")
      axios.get('/get')
.then((res)=>{
    Setlist(res.data)

})
.catch((err)=>{
    console.log(err)
})
  })
    return(
        <>
        <Menu/>
         <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>Hooks</h1>
                <div className="clearfix"></div>
    <p className="mb-0"><b>Name</b> : {name}</p>
    <p className="mb-0"><b>Age</b> : {age}</p>
    <p><b>Age</b> : {age2}</p>
    <button className="btn btn-success" onClick={updateval}>Update AGE</button>
    <button className="btn btn-success" onClick={minus}>Minus AGE</button>
    <div className="mt-2">
    <p className="mb-0"><b>Increment</b> : {dat.sal}</p>  
    <button className="btn btn-warning" onClick={dat.salary}>Increment</button>
    <div className="col-md-4 p-0 pt-2">
    <b className="mt-1">Hook Geting List From API</b>
    <ul>
    {list.map((a,b)=>{
        return <li key={b}>{a.fnm}</li>
    })}
    </ul>    
    </div>
                            </div>      <Hookmy />
               </div>
              </div>
              </div>
                 </section>
           
        </>
    )
}
export default Huks;