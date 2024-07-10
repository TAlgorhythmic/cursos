import controlador from "./main";
import Curso from "./Controler/Curso";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Delete2() {
    const { id } = useParams();
    const [courseId, setCourseId] = useState(undefined);

    function submit() {
        const title = document.getElementById("title").value;

        async function handleDeleteCourse () {
            const response = await controlador.remove(courseId);
            if (response) { 
                setCourseId(''); 
    }
}
      
    }

    useEffect(() => {

        async function fetchCurso() {
            
            const resposta = await controlador.get(id);
            if (resposta) {
                setCourseId(resposta);

            } else {
                console.log(resposta)
            }
        }

        fetchCurso();

    }, []);

    if (!curso) {
        return (
            <>
                <span className="loading" />
            </>
        )
    } else {
        return (
            <>
            <div className="container-centered">
                <p className={isValid ? "valid-style" : "invalid-style"}>{text}</p>
                <div className="container-centered">
                    <div className="form-box">
                        <div className="field">
                            <label className="inner-item key" htmlFor="title">Título</label>
                            <input className="inner-item" id="id" type="text" defaultValue={curso.Id}/>
                        </div>
                                                
                    </div>
                </div>
            </div>
        </>
        )
    }
}