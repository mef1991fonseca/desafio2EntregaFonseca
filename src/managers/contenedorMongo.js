import model from mongoose

class ContenedorMongo {
	constructor(options, collection) {
		this.model = model(options, collection);
	}
	//Save an object
	save(obj) {
		try {
			return this.model.create(obj);
		} catch (err) {
			console.log(err);
		}
	}
	//Get an object by ID
	getById(id) {
		try {
			return this.model.findById(id);
		} catch (err) {
			console.log(err);
		}
	}
	//Get all objects
	getAll() {
		try {
			return this.model.find();
		} catch (err) {
			console.log(err);
		}
	}
	//Delete one object
	deleteById(id) {
		try {
			return this.model.findByIdAndDelete(id);
		} catch (err) {
			console.log(err);
		}
	}
}

export {ContenedorMongo}