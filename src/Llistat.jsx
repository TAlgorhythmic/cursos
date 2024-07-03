import { useEffect, useState } from "react";
import CursoComp from "./CursoComp.jsx";
import controlador from "./main.jsx";

function Llistat() {

    const [cursos, setCursos] = useState([]);

    useEffect(() => { //es una array de los states

        async function getAllCursos() {
            const recs = await controlador.getAll();
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
            <div className="super-container-centered">
                <div className="fade-in">

                    <div className="cursos-lista">
                        {cursos.map((c) => {
                            currentGray = !currentGray;
                            return (
                                <CursoComp id={c.Id} title={c.title} description={c.description} price={c.price} img={c.img} rating={c.rating} gray={currentGray} />
                            )
                        })}
                    </div>
                </div>
            </div>



        </>
    )

} export default Llistat;