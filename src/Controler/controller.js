const BASEURL = "https://app.nocodb.com/api/v2/tables/mf5sryfvazngwcq/records";
const TOKEN = "ziaDGUyYpmYuGvXnT6hCJ8-08LjovuSeme3fFQdY";

import Curso from "./Curso.js";

class Controller {
    async getAll() {
        const request = {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "xc-token": TOKEN
            }
        }
        const response = await fetch(BASEURL, request);
        const data = await response.json();
        const finalObjects = data.map(e => {
            new Curso(e.Id, e.title, e.description, e.price, e.img, e.rating);
        })
        return finalObjects;
    }
    
    async get(id) {
        const request = {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "xc-token": TOKEN
            }
        }
        const response = await fetch(BASEURL + "/" + id, request);
        const data = await response.json();
        const finalIObj = new Curso(data.Id, data.title, data.description, data.price, data.img, data.rating);
        return finalIObj;
    }
    
    async update(curso) {
        const request = {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "xc-token": TOKEN
            },
            "body": JSON.stringify(curso)
        }
        const response = await fetch(BASEURL, request);
        const data = await response.json();
        return data;
    }
    
    async remove(id) {
        const request = {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "xc-token": TOKEN
            },
            "body": JSON.stringify({
                "Id": id
            })
        }
        const response = await fetch(BASEURL, request);
        const data = await response.json();
        return data;
    }
    
    async create(title, description, price, img, rating) {
        const request = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "xc-token": TOKEN
            },
            "body": JSON.stringify({
                "title": title,
                "description": description,
                "price": price,
                "img": img,
                "rating": rating
            })
        }
        const response = await fetch(BASEURL, request);
        const data = await response.json();
        return data;
    }
}

export default Controller;