import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from './Header'
import'./App.css'
import AddStudent from './AddStudent';
import ShowStudent from './ShowStudent';
import NoPage from './NoPage';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
          <Route path="/addstudent" element={<AddStudent/>} />
          <Route path="/ShowStudent" element={<ShowStudent />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App