import { ContenedorMongo } from "../../managers/contenedorMongo.js";

class CarritosDaoMONGO extends ContenedorMongo{
    constructor(options,collection){
        super(options,collection)
    }
}

export {CarritosDaoMONGO}