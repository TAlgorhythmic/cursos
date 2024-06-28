import { Button } from "bootstrap";
import "./style.css";
import { useState } from "react";
import Controller from "./Controler/controller";

const RATING_REGEX = /[0-5]{1}/;

export default function Create() {

    const [isValid, setValid] = useState([true, ""]);

    function submit() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = parseFloat(document.getElementById("price").value);
        const img = document.getElementById("img").value;
        const rating = document.getElementById("rating").value;
        
        if (title.length > 16) {
            setValid([false], "El título no puede ser más largo de 16 carácteres.");
            return;
        }
        if (isNaN(price)) {
            setValid([false], "El precio debe ser un valor numérico.");
            return;
        }
        if (RATING_REGEX.test(rating)) {
            setValid([false], "El rating debe ser un número entre 0 y 5.");
            return;
        }
        setValid([true], "");

        const controller = new Controller();
        controller
    }

    const validStyle = {
        height: "0px",
        width: "0px",
        margin: "0px"
    }
    const invalidStyle = {
        height: "100px",
        width: "100%",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        color: "white",
        fontSize: "larger"
    }

    const override = {
        marginRight: "0px !important"
    }

    return (
        <div className="container-centered">
            <div className="form-box">
                <div className="field">
                    <label className="inner-item" htmlFor="title">Título</label>
                    <input className="inner-item" id="title" type="text" />
                </div>
                <div className="field">
                    <label className="inner-item" htmlFor="description">Descripción</label>
                    <input className="inner-item" id="description" type="textarea" />
                </div>
                <div className="field">
                    <label className="inner-item" htmlFor="price">Precio</label>
                    <input className="inner-item" id="price" type="number" />
                </div>
                <div className="field">
                    <label className="inner-item" htmlFor="img">Imágen (URL)</label>
                    <input className="inner-item" id="img" type="text" />
                </div>
                <div className="field">
                    <label className="inner-item" htmlFor="rating">Rating</label>
                    <input className="inner-item" style={override} id="rating" type="text"/>
                    <p className="inner-item">/5</p>
                </div>
                <div className="field">
                    <button className="button" onClick={submit}>Crear</button>
                </div>
            </div>
        </div>
    )
}