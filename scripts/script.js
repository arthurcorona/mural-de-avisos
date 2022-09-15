const { json } = require("body-parser");
const { options } = require("../routes/api");

document.addEventListener('DomContentLoaded', () => {
    updatePosts()
})


function updatePosts() {

    let promise = fetch("htp://localhost:3000/api/all").then(res => {
        return res.json()
    }) 

    promise.then(json => {
        console.log(json);
    })

}

function newPost() {

}