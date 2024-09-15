import React, { useState } from "react";

function App() {
  const [name , setName] = useState({
    fName:"",
    lName:"",
    email:""
  })
  function handleChange(event){
    const value = event.target.value;
    const input = event.target.name;
    
      setName((prev)=>{
        if(input === "fName"){
          return{
            fName : value,
            lName : prev.lName,
            email: prev.email
          }
        }
        else if (input === "lName"){
          return{
            fName: prev.fName,
            lName: value,
            email: prev.email
          }
        }
        else if (input === "email"){
          return{
            fName: prev.fName,
            lName: prev.lName,
            email: value
          }
        }
      })
  }
  return (
    <div className="container">
      <h1>Hello {name.fName} {name.lName}</h1>
      <p>{name.email}</p>
      <form>
        <input name="fName"  onChange={handleChange} placeholder="First Name" value={name.fName} />
        <input name="lName"  onChange={handleChange} placeholder="Last Name"  value={name.lName}/>
        <input name="email"  onChange={handleChange} placeholder="Email"  value={name.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
