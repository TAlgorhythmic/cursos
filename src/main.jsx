
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //llibreria propia de react

//nomes importar aquells que surtin en la ruta
import App from './App.jsx'
import Curso from './Curso.jsx'
import NotFound from './NotFound.jsx'

//<Route index element={<Llista />} />


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Routes>
        <Route path="/" element={<App />}> 
          <Route path="/curso/:id" element={<Curso />} />
          <Route path='*' element={<NotFound />} /> 
        </Route>
      </Routes>
  </BrowserRouter>

  </React.StrictMode>
);
