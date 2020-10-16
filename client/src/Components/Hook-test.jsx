import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Hook_cust from './Hook_cust'
export default function Hookmy() {
    const ed=Hook_cust()
    const [setnm,valnm]=useState("Rahul Kumar")
    const [dat,data]=useState([])
    const cng1=()=>{
        valnm("Harshit Kushwah")
    }
    useEffect(() => {
        console.log("Use Effect Calling2")
        axios.get('/get')
            .then((res) => {
                data(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
       <h1>Hook Test</h1>
    <p>{setnm}</p>    
    <button className="btn btn-light" onClick={cng1}>Change Name</button>
    <br/> 
    <b>Loop Name from Api</b>
    {dat.map((c,d)=>{
        return <p key={d} className="mb-0">{c.fnm}</p>
    })}
    <div className="clearfix"></div>
<p>{ed.sele}</p>
<button className="btn btn-success" onClick={ed.dc}>Increment</button>
        </>
    )
}
