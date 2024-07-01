import { useState } from 'react';
import Controller from './Controler/controller.js';

export default function Delete() {
    const [courseId, setCourseId] = useState('');
    const [course, setCourse] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setCourseId(e.target.value);
    };

    const handleCheckCourse = async () => {
        const cursosController = new Controller();
        try {
            const fetchedCourse = await cursosController.get(courseId);
            if (fetchedCourse) {
                setCourse(fetchedCourse);
                setMessage('Curso encontrado: ' + fetchedCourse.title);
            } else {
                setMessage('Curso no encontrado');
            }
        } catch (error) {
            console.error('Error al obtener el curso:', error);
            setMessage('Error al obtener el curso');
        }
    };

    const handleDeleteCourse = async () => {
        if (!course) {
            setMessage('Primero verifique que el curso existe');
            return;
        }
        const cursosController = new Controller();
        try {
            const response = await cursosController.delete(courseId);
            if (response) {
                setMessage('Curso eliminado con éxito');
                setCourse(null); // Resetear el estado
                setCourseId(''); // Resetear el ID ingresado
            } else {
                setMessage('Error al eliminar el curso');
            }
        } catch (error) {
            console.error('Error al eliminar el curso:', error);
            setMessage('Error al eliminar el curso');
        }
    };

    return (
        <div>
            <h1>Eliminar Curso</h1>
            <div>
                <label>Ingrese el ID del curso:</label>
                <input 
                    type="text" 
                    value={courseId} 
                    onChange={handleChange} 
                />
                <button onClick={handleCheckCourse}>Verificar Curso</button>
            </div>
            {message && <p>{message}</p>}
            {course && (
                <div>
                    <h2>Curso: {course.title}</h2>
                    <button onClick={handleDeleteCourse}>Eliminar Curso</button>
                </div>
            )}
        </div>
    );
}
