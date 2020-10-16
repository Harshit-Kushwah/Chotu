import {useState} from 'react'
export default function Hook_cust() {
    const [sele,lele]=useState(50)
    const dc=()=>{
        lele(sele+50)
    }
    return (
   {dc,sele}
    )
}
