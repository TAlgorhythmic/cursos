import { useState } from 'react';
import controlador from './main.jsx';

export default function Delete() {
    const [courseId, setCourseId] = useState('');

    const handleChange = (e) => {
        setCourseId(e.target.value);
    };

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
            </>
    );
}
