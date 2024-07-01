import { Link } from "react-router-dom";
import Controller from "./Controler/controller.js";
import { useEffect, useState } from "react";
import CursoComp from "./CursoComp.jsx";



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

        if (cursos.length === 0) getAllCursos();
    }, [])



    if (cursos.length === 0) {
        return (
            <>
                <span className="loading" />
            </>
        )
    }

    let currentGray = true;

    return (
        <>
            <div className="fade-in">
                <h1>Llista de cursos</h1>
                <div className="cursos-lista">
                    {cursos.map((c) => {
                        currentGray = !currentGray;
                        return (
<CursoComp id={c.Id} title={c.title} description={c.description} price={c.price} img={c.img} rating={c.rating} gray={currentGray}/>
                        )
                    })}
                </div>
            </div>


        </>
    )

} export default Llistat;