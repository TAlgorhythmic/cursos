import { useState, useEffect } from 'react';
import controlador from './main.jsx';

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
                <div key={course.id}>
                    <div className="body-card">
                        <div className="title">{course.title}</div>
                        <div className="id">ID: {course.Id}</div>
                    </div>
                </div>
            ))}
            </div>
            </>
    );
}
