import { useState, useEffect } from "react";
import Controller from "./Controler/controller";

export default function Edit({ id }) {
    const [course, setCourse] = useState("");

    useEffect(() => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cursosController = new Controller();
        try {
            const updatedCourse = await cursosController.update(id);
            if (updatedCourse) {
                setCourse(updatedCourse);
                console.log('Curso actualizado con éxito');
            } else {
                console.log('No se recibieron datos actualizados');
            }
        } catch (error) {
            console.error('Error al actualizar el curso:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title" 
                    value={course.title} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    value={course.description} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Price:</label>
                <input 
                    type="number" 
                    name="price" 
                    value={course.price} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Image URL:</label>
                <input 
                    type="text" 
                    name="img" 
                    value={course.img} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Rating:</label>
                <input 
                    type="number" 
                    name="rating" 
                    value={course.rating} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Update Course</button>
        </form>
    );
}