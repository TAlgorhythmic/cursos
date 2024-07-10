import { Carousel } from "react-bootstrap";
import controlador from "./main";
import { useEffect, useState } from "react";

export default function UserMain() {

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
            </>
        )
    }

    const cursosTemp = [...cursos];
    cursosTemp.sort((a, b) => {
        return a.rating - b.rating;
    });

    return (
        <div className="flex-column-center">
            <Carousel className="carousel-positioning">
                <Carousel.Item>
                    <img src={cursosTemp[0].img} text="Image 1" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={cursosTemp[1].img} text="Image 2" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={cursosTemp[2].img} text="Image 3" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}