module.exports = {

    posts : [
        {
            id: "aidi", 
            title: "Título do Mural",
            description: "esse mural serve para"
        },
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({id:generateID(), title, description})
    },

    deletePost(id) {
        //fazer mais pra frente
    }

}   

function generateID() {
    return Math.random().toString(36).substring(2, 9)
}

