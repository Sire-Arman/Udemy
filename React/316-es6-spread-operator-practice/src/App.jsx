import React, { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Navbar from "./components/Nabar/Navbar.jsx";

function App() {
  const [list, setList] = useState([]);
  
  function handleDelete(id){
    setList((prev)=>{
      return prev.filter((item, index)=>{
        return id !== index
      })
    })
  }
  return (
    <div className="container">
      <Navbar />
      <Header />
      <AddItem setList={setList}/>
      {
        list.map((item,index)=>(
          <List key={index} index={index} item={item} handleDelete={handleDelete}/>
        ))
      }
    </div>
  );
}

export default App;
