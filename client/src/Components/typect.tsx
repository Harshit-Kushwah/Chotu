import React, { Component } from 'react';
class Typet extends Component {
      render() {
       let cc1="Gunnu"
       let cc2=12345
       let cc3=true
       if(cc3){
          // alert("Hello")
       }
    //    let cc4=()=>{
    //        return `Hello`
    //    }
       //Touple
      // let cc5:[string,number]
       //Union
       let cc6=(cc:string|number)=>{
if(typeof(cc)=="number"){
return "This is Numer "+cc
}
else if(typeof(cc)=="string"){
    return "This is Name "+cc
}
       }
       enum cc7{
        Sun = 1,
        Mon = "kkk",
        Tue = "gb",
        Wed = 4
       }
        return (
            <>
        <p className="mb-1">Static Buit in</p>
        <p className="mb-1"> Name {cc1}</p>
        <p className="mb-1">Number {cc2}</p>
       
        {/* <p className="mb-1">Touple {cc5=["Harshit", 2.5]}</p> */}
        <p className="mb-1">Union {cc6(45)}</p>
        <p className="mb-1">Enum {cc7.Wed}</p>
            </>
        );
    }
}

export default Typet;