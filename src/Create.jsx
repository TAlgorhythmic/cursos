import "./style.css";
import { useState } from "react";
import Controller from "./Controler/controller";

export default function Create() {

    const [isValid, setValid] = useState([true, ""]);

    async function submit() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = parseFloat(document.getElementById("price").value);
        const img = document.getElementById("img").value;
        const rating = document.getElementById("rating").value;

        if (title.length > 16) {
            console.log("fallo0")
            setValid([false], "El título no puede ser más largo de 16 carácteres.");
            return;
        }
        if (isNaN(price)) {
            console.log("fallo1 ")
            setValid([false], "El precio debe ser un valor numérico.");
            return;
        }
        if (rating < 0 || rating > 5) {
            console.log("fallo2o")
            setValid([false], "El rating debe ser un número entre 0 y 5.");
            return;
        }
        setValid([true], "");

        const controller = new Controller();
        const data = await controller.create(title, description, price, img, rating);
    }

    const override = {
        marginRight: "0px !important"
    }

    return (
        <>
            <div className={isValid[0] ? "valid-style" : "invalid-style"}>
                <p>{isValid[0] ? "" : isValid[1]}</p>
            </div>
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
                        <input className="inner-item" style={override} id="rating" type="text" />
                        <p className="inner-item">/5</p>
                    </div>
                    <div className="field">
                        <button className="button" onClick={submit}>Crear</button>
                    </div>
                </div>
            </div>
        </>
    )
}