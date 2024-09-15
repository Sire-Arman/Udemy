import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      {notes.map( (n) => {return <Note key={n.key} title={n.title} content = {n.content}/>})}
      {/* <Note /> */}
      <Footer />
    </div>
  );
}

export default App;
