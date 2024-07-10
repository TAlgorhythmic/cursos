import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Curso from './Curso.jsx'
import NotFound from './NotFound.jsx'
import Llistat from './Llistat.jsx'
import Create from './Create.jsx';
import Update from './Update.jsx';
import Controller from './Controler/controller.js';
import UserMain from './UserMain.jsx';

const controlador = new Controller();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Llistat />}/>
          <Route path="/user" element={<UserMain />} />
          <Route path="/curso/:id" element={<Curso />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default controlador;