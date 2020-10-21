import React, { Component } from 'react'
import Menu from './Nav'
import axios from 'axios'
import Apipost from './api-Post'
import Apidelete from './api-delete'
import Errorhandler from './Errorhandler'
import $ from 'jquery'
export default class Api extends Component {
    constructor(props){
        super(props)
        this.state={
ab:[],age1:"",city1:"",id:"",fnm:"",
        }
        this.updateget=this.updateget.bind(this)
        this.Deletekey=this.Deletekey.bind(this)    
        this.uppdataa=this.uppdataa.bind(this)
        this.changeskey=this.changeskey.bind(this)
    }
    async componentDidMount(){
axios.get('/get')
.then((res)=>{
    this.setState({ab:res.data})
    console.log(res)
})
.catch((err)=>{
    console.log("Error")
})
    }
     updateget=()=>{
        setTimeout(()=>{
            axios.get('/get')
        .then((res)=>{
            this.setState({ab:res.data})
        })
        .catch((err)=>{
            console.log("Error")
        })   
        },200)
       }

Deletekey=(e)=>{
e.preventDefault()
 let del=e.target.value;
 $("#loader").css({"display":"flex"}) 
 $("#root").addClass("is_blir")
axios.delete(`/del/${del}`)
.then((res)=>{
    if(res.data==="del"){
        $("#root").removeClass("is_blir")
        $("#loader").removeAttr("style") 
        axios.get('/get')
.then((res)=>{
    this.setState({ab:res.data})
})
.catch((err)=>{
    console.log("Error")
})
    }
    else{
        throw new Error("Delete Failde")
    }
})
}
updatekey=(e)=>{
e.preventDefault()
const data=this.state.ab[e.target.name]
const {fnm,Age,city}=data
//console.log(data)
this.setState({id:e.target.value,
   fnm:fnm,
   age1:Age,
   city1:city
})
let up=e.target.value
$(`#${up}`).find("span,[data-del],[data-up]").hide()
$(`#${up}`).find("[data-del],[data-up]").next().show()
$(`#${up}`).find("input").show()
}
cancelkey=(e)=>{
    e.preventDefault()
let can=e.target.value
$(`#${can}`).find("span,[data-del],[data-up]").show()
$(`#${can}`).find("[data-del],[data-up]").next().hide()
$(`#${can}`).find("input").hide()
}
changeskey=(e)=>{
 this.setState({
[e.target.name]:e.target.value
})
}
uppdataa=(e)=>{
e.preventDefault()
$("#loader").css({"display":"flex"})
$("#root").addClass("is_blir") 
let up=e.target.id
//console.log(up)
axios.put(`/update/${up}`,this.state)
.then((res)=>{
    if(res.data==="Update"){
        $("#loader").removeAttr("style")
        $("#root").removeClass("is_blir")  
        $(`#${up}`).find("span,[data-del],[data-up]").show()
        $(`#${up}`).find("[data-del],[data-up]").next().hide()
        $(`#${up}`).find("input").hide()
        axios.get('/get')
        .then((res)=>{
            this.setState({ab:res.data})
        })
        .catch((err)=>{
            console.log("Error")
        })
    }
    else{
        throw new Error("Error in Update")
    }
})
}
    render() {
        const data1=this.state.ab                 
        return (
            <>       
                <Menu/>
         <section className="data">
             <div className="container-fluid gap">
<div className="row">
	<div className="col-xl-12 p-0">
                <h1>Api Get Mehtod</h1>
                <div className="clearfix"></div> 
<ul>
{data1.map((a,b)=>{
    return <li key={b}>{a.fnm} {a.Age} {a.city}</li>
})}    
</ul>

                <div className="clearfix"></div>                 
<div className="row">
<Errorhandler>
    <Apipost click={this.updateget}></Apipost>
</Errorhandler>
<div className="col-xl-6">
                <h1>Api Delete & Update Mehtod</h1>
                <Errorhandler>
                    <Apidelete fn={this.state.fnm} ag={this.state.age1} ct={this.state.city1} updata={this.uppdataa} change={this.changeskey} dele={this.state.ab} del={this.Deletekey} update={this.updatekey} cancel={this.cancelkey}></Apidelete>
                </Errorhandler>                
                </div>
</div>       
               </div>
              </div>
              </div>
                 </section>  
            </>
        )
    }
}
