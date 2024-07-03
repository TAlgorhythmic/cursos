import "./style.css";
import { useState } from "react";
import controlador from "./main";

export default function Create() {

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

        controlador.create(title, description, price, img, rating);
    }

    const override = {
        marginRight: "0px !important"
    }

    return (
        <>
            <div className="container-centered">
                <p className={isValid ? "valid-style" : "invalid-style"}>{text}</p>
                <div className="container-centered">
                    <div className="form-box">
                        <div className="field">
                            <label className="inner-item key" htmlFor="title">Título</label>
                            <input className="inner-item" id="title" type="text" />
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="description">Descripción</label>
                            <input className="inner-item" id="description" type="textarea" />
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="price">Precio</label>
                            <input className="inner-item" id="price" type="number" />
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="img">Imágen (URL)</label>
                            <input className="inner-item" id="img" type="text" />
                        </div>
                        <div className="field">
                            <label className="inner-item key" htmlFor="rating">Rating</label>
                            <div className="rating-container">
                                <input className="inner-item rating-textbox" style={override} id="rating" type="number" />
                                <p className="inner-item zero-left-margin">/5</p>
                            </div>
                        </div>
                        <div className="field">
                            <button className="clickme-button" onClick={submit}>Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}