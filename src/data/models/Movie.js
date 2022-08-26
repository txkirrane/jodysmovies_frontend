export default class Movie {
    id = undefined

    title = undefined
    image = undefined

    description = undefined

    constructor({id, title, image, description}){
        this.id = id || undefined
        this.title = title || "Movie"
        this.image = image || ""
        this.description = description || ""
    }
    
}