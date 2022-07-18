import {Button} from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './pages/Homepage';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePageDom from "./pages/Homepage-dom/homepagedom";
import ProductPage from "./pages/ProductPage/productpage";
import NotFound from "./pages/404/404page";

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
      <Routes>
        <Route path="/">
          <Route index element={<HomePageDom/>}/>
          <Route path="product">
            <Route index element={<NotFound/>}/>
            <Route path=":id" element={<ProductPage/>}/>
          </Route>
        </Route>
      </Routes>
      {/* <HomePage/>  */}
      {/* <Button onClick={addData}>add Data</Button>
      <Button onClick={()=> deletData(2)}>delete Data</Button> */}
    </>
  )
}

export default App
