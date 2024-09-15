import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Note from "./components/Note";
function App() {
  return (
    <>
      <Header />
      <Note />
      <Footer />
    </>
  );
}

export default App;
