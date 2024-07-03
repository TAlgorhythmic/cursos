import controlador from "./main";
import Curso from "./Controler/Curso";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Update() {
    const { id } = useParams();

    const [curso, setCurso] = useState(undefined);
    const [isValid, setValid] = useState(true);
    const [text, setText] = useState("");

    function submit() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = parseFloat(document.getElementById("price").value);
        const img = document.getElementById("img").value;
        const rating = parseInt(document.getElementById("rating").value);

        if (title.length > 32) {
            console.log("fallo0")
            setValid(false);
            setText("El título no puede ser más largo de 32 carácteres.");
            return;
        }
        if (isNaN(price)) {
            console.log("fallo1 ")
            setValid(false);
            setText("El precio debe ser un valor numérico.");
            return;
        }
        if (rating < 0 || rating > 5 || isNaN(rating)) {
            console.log("fallo2o")
            setValid(false);
            setText("El rating debe ser un número entre 0 y 5.")
            return;
        }
        setValid(true);
        setText("");

        controlador.update(new Curso(id, title, description, price, img, rating));
    }

    useEffect(() => {

        async function fetchCurso() {
            
            const resposta = await controlador.get(id);
            if (resposta) {
                setCurso(resposta);

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
            <div >
                <p className={isValid ? "valid-style" : "invalid-style"}>{text}</p>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title"
                        value={curso.title} 
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description"
                        value={curso.description} 
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price"
                        value={curso.price} 
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input 
                        type="text" 
                        name="img" 
                        id="img"
                        value={curso.img} 
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input 
                        type="number" 
                        name="rating" 
                        id="rating"
                        value={curso.rating}                    
                    />
                </div>
                <button onClick={submit}>Update Course</button>
            </div>
        );
    }
}
