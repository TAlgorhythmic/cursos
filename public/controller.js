const BASEURL = "https://app.nocodb.com/api/v2/tables/mf5sryfvazngwcq/records";
const TOKEN = "ziaDGUyYpmYuGvXnT6hCJ8-08LjovuSeme3fFQdY";

import Curso from "./Curso";

async function getAll() {
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

async function get(id) {
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

async function update(curso) {
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

async function remove(id) {
    const request = {
        "method": "DELETE",
        
    }
}

export {getAll, get, update, remove, create};