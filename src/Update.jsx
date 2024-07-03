import { useState, useEffect } from "react";
import Controller from "./Controler/controller"; 

export default function Update(curso) {
    const [title, setTitle] = useState("curso.title");
    const [description, setDescription] = useState("curso.description");
    const [price, setPrice] = useState("curso.price");
    const [img, setImg] = useState("curso.img");
    const [rating, setRating] = useState("curso.rating");
    
    useEffect(() => {
        async function updateCourse() {
            const cursosController = new Controller();
            const updatedCourse = await cursosController.update(curso.id, title, description, price, img, rating);
            if (updatedCourse) {
                setTitle(updatedCourse.title);
                setDescription(updatedCourse.description);
                setPrice(updatedCourse.price);
                setImg(updatedCourse.img);
                setRating(updatedCourse.rating);
            } else {
                console.log('Error no actualizado');
            }
        }
        updateCourse();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    return (
        <form >
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
