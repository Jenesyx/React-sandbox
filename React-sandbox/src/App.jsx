import {Button} from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './pages/Homepage';
import { useState } from "react";

// function addData() {
//   axios.post('http://localhost:3000/profile', {
//     name : "mohamad",
//     lastname : "tehrani",
//   }).then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

// function deletData() {
//   axios.delete(`http://localhost:3000/profile/${id}`)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

function App() {

  return (
    <>
      <HomePage/> 
      {/* <Button onClick={addData}>add Data</Button>
      <Button onClick={()=> deletData(2)}>delete Data</Button> */}
    </>
  )
}

export default App
