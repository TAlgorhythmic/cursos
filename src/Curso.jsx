import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Controller from "./Controler/controller.js"; 
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

function Curso(){

    const { id } = useParams();
    const [curso, setCurso] = useState('');

    useEffect(() => {

        async function getCurso() {
            const cursosController = new Controller();
            const resposta = await cursosController.get(id);
            if (resposta) {
                setCurso(resposta);
                
            } else {
                console.log(resposta)
            }
        }

        getCurso();

    }, [])

    if (!curso) {
        return (
            <>
                <h1>Curso no encontrado</h1>
            </>
        )
    }

return (
    <>
    <Row>
    <Card >
                        <Card.Img variant="top" src={curso.src} />
                        <Card.Body>
                            <Card.Title>{curso.title}</Card.Title>
                            <Card.Text>
                                {curso.descripcio}
                            </Card.Text>
                            <Link className="btn btn-outline-primary" to="/">Tornar</Link>
                        </Card.Body>
                    </Card>
    </Row>
    </>
)

}export default Curso;