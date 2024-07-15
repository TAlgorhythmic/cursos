import { Carousel } from "react-bootstrap";
import controlador from "./main";
import { useEffect, useState } from "react";
import CarouselDiv from "./CarouselDiv";

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
            <Carousel className="carousel-positioning fade-in">
                {
                    cursosTemp.map(curso => {
                        return (
                            <Carousel.Item>
                                <CarouselDiv curso={curso}/>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}