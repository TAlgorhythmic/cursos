import controlador from "./main";
import Curso from "./Controler/Curso";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Update() {
    const { id } = useParams();

    const [curso, setCurso] = useState(undefined);
    const [isValid, setValid] = useState(true);
    const [text, setText] = useState("");

    const override = {
        marginRight: "0px !important"
    }

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
            <>
            <div className="container-centered">
                <p className={isValid ? "valid-style" : "invalid-style"}>{text}</p>
                <div className="container-centered">
                    <div className="form-box">
                        <div className="field">
                            <label className="inner-item key" htmlFor="title">Título</label>
                            <input className="inner-item" id="title" type="text" defaultValue={curso.title}/>
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="description">Descripción</label>
                            <input className="inner-item" id="description" type="textarea" defaultValue={curso.description}/>
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="price">Precio</label>
                            <input className="inner-item" id="price" type="number" defaultValue={curso.price}/>
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="img">Imágen (URL)</label>
                            <input className="inner-item" id="img" type="text" defaultValue={curso.img}/>
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="rating">Rating</label>
                            <div className="rating-container">
                                <input className="inner-item rating-textbox" style={override} id="rating" type="number" defaultValue={curso.rating}/>
                                <p className="inner-item zero-left-margin">/5</p>
                            </div>
                        </div>
                        <div className="field">
                            <button className="clickme-button" onClick={submit}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
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
