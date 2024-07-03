import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

import controlador from "./main.jsx";

function Curso() {

    const { id } = useParams();
    const [curso, setCurso] = useState('');

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
    }

    return (
        <>
            <Row >
                <Card  className="card-curso"  >
                    <Card.Img  className="imagen" variant="top" src={curso.img} />
                    <Card.Body>
                        <Card.Title>{curso.title}</Card.Title>
                        <Card.Text>
                            {curso.description}
                        </Card.Text>
                        <Link className="btn btn-outline-primary" to="/">Tornar</Link>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )

} export default Curso;