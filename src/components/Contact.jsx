import React from "react";
import {v4 as uuid} from "uuid"
import {useState,useEffect} from "react"
export default function Contact(){
  const [index,setId]= useState(null)
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const [number,setNumber]=useState("")
  const [message,setMessage]= useState(null)
  const [message1,setMessage1]= useState(null)
  let data= JSON.parse(localStorage.getItem("contacts"))
  const[contacts,setContacts]= useState(data || [])
  function handleAdd(){
    setFirstName("")
    setLastName("")
    setNumber("")
  }
  function handleData(){
    setMessage1(true)
    let filtered=contacts.map((ele)=>{
      if(ele.id===index){
        return {...ele,firstName,lastName,number}
      }
      return ele
    })
    setContacts(filtered)
  }
  function handleClick1(){
    setMessage(null)
    setFirstName("")
    setLastName("")
    setNumber("")
  }

  function handleClick2(){
    if(firstName==="" || lastName==="" ||number==="" || number.length!==10 || isNaN(Number(number))){
      setMessage(true)
    }
    else{
    setContacts([...contacts,{firstName,lastName,number,id:uuid()}])
    setMessage(false)
    setFirstName("")
    setLastName("")
    setNumber("")
    }
  }
  function handleClose(){
    setFirstName("")
    setLastName("")
    setNumber("")
  }
  function handleDelete(id){
    setId(id)
   let filtered= contacts.filter((ele)=>{
      return ele.id!==id
    })
    setContacts(filtered)
  }
   function handleView(id){
   let filtered= contacts.filter((ele)=>{
      return ele.id===id
    })
   filtered.map((ele)=>{
    setFirstName(ele.firstName)
    setLastName(ele.lastName)
    setNumber(ele.number)
   })
  }
   function handleEdit(id){
     setId(id)
    let filtered= contacts.find((ele)=>{
      return ele.id===id
    })
    setFirstName(filtered.firstName)
    setLastName(filtered.lastName)
    setNumber(filtered.number)
    console.log(firstName,lastName,number)
  }
  function handleChange1(e){
  setFirstName(e.target.value)
  }
  function handleChange2(e){
    setLastName(e.target.value)
  }
   function handleChange3(e){
    setNumber(e.target.value)
  }
  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(contacts))
  },[contacts])
  return(
    <div className="outer">
      <div className="flex1">
        <h3>Add Contacts</h3>
        <button onClick={handleAdd} className="btn1" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-plus-square fa-2x"></i></button>
    </div>
      {contacts.length>0?
       contacts.map((ele)=>{
          return(
            <div key={ele.id} className="item">
             <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <p style={{margin:"auto 0"}}>{ele.firstName} {ele.lastName}</p>
              <p style={{margin:"auto 0"}}>{ele.number}</p>
             </div>
              <div style={{display:"flex",flexDirection:"column",margin:"auto 0"}}>
                <button className="btn2" onClick={()=>handleView(ele.id)} data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></button>
                <button onClick={()=>handleEdit(ele.id)} className="btn2"><i className="fa-solid fa-pen-to-square" data-toggle="modal" data-target="#exampleModalCenter2"></i></button>
                <button onClick={()=>handleDelete(ele.id)} className="btn2"><i className="fa fa-trash"></i></button>
              </div>
            </div>
          )
        })
      :
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh"}}>
        <h1 style={{color:"darkturquoise"}}>No contacts to display</h1>
      </div>}
<div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body contactAdd">
        {message1?<p style={{color:"turquoise"}}><strong>Contact has been modified</strong></p>:""}
        <label>First Name</label>
        <input className="contactInput" type="text" onChange={handleChange1} value={firstName}></input>
        <label>Last Name</label>
        <input className="contactInput" type="text" onChange={handleChange2} value={lastName}></input>
        <label>Mobile</label>
        <input className="contactInput" type="tel" onChange={handleChange3} value={number}></input>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={handleData} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">View Contact Details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body contactAdd">
         <label>First Name</label>
        <input className="contactInput cursor" type="text" value={firstName} readOnly></input>
        <label>Last Name</label>
        <input className="contactInput cursor" type="text" value={lastName} readOnly></input>
        <label>Mobile</label>
        <input className="contactInput cursor" type="tel" value={number} readOnly></input>
      </div>
      <div className="modal-footer">
        <button onClick={handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog-centered modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
        <button onClick={handleClick1} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body contactAdd">
        {message===true?<p style={{color:"turquoise"}}><strong>Please enter valid data</strong></p>:message===false?<p style={{color:"turquoise"}}><strong>Contact has been added</strong></p>:""}
        <label>First Name</label>
        <input className="contactInput" type="text" onChange={handleChange1} value={firstName}></input>
        <label>Last Name</label>
        <input className="contactInput" type="text" onChange={handleChange2} value={lastName}></input>
        <label>Mobile</label>
        <input className="contactInput" type="tel" onChange={handleChange3} placeholder="Enter number(10 digits)" value={number}></input>
      </div>
      <div className="modal-footer">
        <button onClick={handleClick2} type="button" className="btn btn-danger">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}