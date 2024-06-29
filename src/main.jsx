
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Curso from './Curso.jsx'
import NotFound from './NotFound.jsx'
import Llistat from './Llistat.jsx'
import Create from './Create.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Llistat />} />
          <Route path="/curso/:id" element={<Curso />} />
          <Route path="/create" element={<Create />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
