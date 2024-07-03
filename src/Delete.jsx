import { useState, useEffect } from 'react';
import controlador from './main.jsx';
import Card from 'react-bootstrap/Card';

export default function Delete() {
    const [courseId, setCourseId] = useState('');
    const[courses, setCourses] = useState([]);

    const handleChange = (e) => {
        setCourseId(e.target.value);
    };

    useEffect(() => {
        async function fetchCourses() {
            const allCourses = await controlador.getAll();
            setCourses(allCourses);
        }

        fetchCourses();
    }, []);

    async function handleDeleteCourse () {
        console.log(courseId);
       // if (!courseId) {

            const response = await controlador.remove(courseId);
            if (response) { 
                setCourseId(''); 
    }
}
    return (
        
            <>
            <div className="e"> 
            <label className="eliminar" >ID del Curso</label>
            
                            <input 
                                type="number" 
                                value={courseId} 
                                onChange={handleChange} 
                            />
                            
                <button onClick={handleDeleteCourse} className="boton-eliminar">Eliminar</button>
                </div>
                <br></br>
                <div className="container-vista">
                {courses.map(course => (
                <Card key={course.id}>
                    <Card.Body className='body-card'>
                        <Card.Title className="title">{course.title}</Card.Title>
                        <Card.Text className="id">ID: {course.Id}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </div>
            </>
    );
}
