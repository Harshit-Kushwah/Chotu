import React from 'react'
function Memo({nam}){
    console.log("Memo Calling")
    return( 
    <>
    Hello : {nam}
     </>
    )
}
export default React.memo(Memo);