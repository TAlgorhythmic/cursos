import "./style.css";

export default function Create() {

    function submit() {

    }

    return (
        <div className="container-centered">
            <div className="form-box">
                <div className="field">
                    <label className="inner-item" htmlFor="title">Título</label>
                    <input className="inner-item" id="title" type="text"/>

                    <label className="inner-item" htmlFor="description">Descripción</label>
                    <input className="inner-item" id="description" type="textarea"/>

                    <label className="inner-item" htmlFor="title">Precio</label>
                    <input className="inner-item" id="title" type="text"/>

                    <label className="inner-item" htmlFor="title">Título</label>
                    <input className="inner-item" id="title" type="text"/>

                    <label className="inner-item" htmlFor="title">Título</label>
                    <input className="inner-item" id="title" type="text"/>
                </div>
            </div>
        </div>
    )
}