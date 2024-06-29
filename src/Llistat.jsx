import { Link } from "react-router-dom";
import Controller from "./Controler/controller.js"; 
import { useEffect, useState } from "react";



function Llistat() {

    const [cursos, setCursos] = useState([]);

    useEffect(() => { //es una array de los states

        async function getAllCursos() {
            const cursosController = new Controller();
            const recs = await cursosController.getAll();
            if (recs.length) {
                setCursos(recs);
            } else {
                console.log(recs)
            }
        }

        getAllCursos();



    if (cursos.length == 0) {
        return (
            <>
                <h1>No hi ha cursos</h1>
            </>
        )
    }

    return (
        <>
            <h1>Llista de cursos</h1>

            <ul>

                {cursos.map((c) => {
                    return (
                        <li key={c.Id} >
                            <Link to={"/curso/" + c.Id} >{c.title}</Link>
                        </li>
                    )
                })}
            </ul>


        </>
    )
}


export default Llistat;