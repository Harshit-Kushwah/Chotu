import {useState} from 'react'
function Custom(){
const [sal,setSal]=useState(100)
console.log("Custom Hook")
const salary=()=>{
    setSal(sal+500)
}
return{sal,salary}
}

export default Custom;