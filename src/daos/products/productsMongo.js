import { ContenedorMongo } from "../../managers/contenedorMongo.js";

class ProductosDaoMONGO extends ContenedorMongo{
    constructor(options,collection){
        super(options,collection)
    }
}

export {ProductosDaoMONGO}