import { useState } from 'react';
import { Link } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Link to="/" className="navbar-brand">Cursos</Link>
    </>
  )
}

export default App;