const faker = require("faker");
const data = require("../data/data");
const products = [];
const pool = require("../libs/postgres");
const {models} = require("../libs/sequelize");

class TasksServices {

	constructor(){}

	async find() {

		//const query = "SELECT * from tasks"
		const respuesta = await models.Task.findAll();
		return respuesta;
		//const respuesta = await this.pool.query(query);
		//return respuesta.rows;
		/*const cliente = await getConnection();
		const respuesta = await cliente.query("Select * from tasks");
		return respuesta.rows;*/
	}
	async findOne(id) {
		const respuesta = await models.Task.findByPk(id);
		return respuesta;
		/*const query = `SELECT * from tasks WHERE id = '${id}'`;
		const respuesta = await this.pool.query(query);
		return respuesta.rows;
		/*const cliente = await getConnection();
		const respuesta = await cliente.query(`select * from tasks where id = '${id}'`);
		return respuesta.rows;
		//return products.find((item) => item.id === id);*/
	}
	async create(name, price, image) {
		const query = `INSERT INTO tasks(title) VALUES ('${name}')`;
		const respuesta = await this.pool.query(query);
		return respuesta.rows;
		/*const cliente = await getConnection();
		const respuesta = await cliente.query(`INSERT INTO tasks(title) VALUES ('${name}')`);
		console.log(respuesta);
		return respuesta.rows;
		if (name && price && image) {
			const product = {
				id: faker.datatype.uuid(),
				name: name,
				price: price,
				image: image,
			};
			products.push(product);
			return product;
		}*/
	}
	async update(id, name, price, image) {

		const query = `UPDATE tasks SET title = '${name}' WHERE id = '${id}'`;
		const respuesta = await this.pool.query(query);
		console.log(respuesta.rows);
		return respuesta.rows;
		/*const product = this.findOne(id);
		if (product) {
			if (name && price && image) {
				products.forEach((element) => {
					if (element.id == id) {
						(element.name = name),
							(element.price = price),
							(element.image = image);
					}
				});
				return {
					status: 200,
				     data: await this.findOne(id),
				};
			} else {
				return {
					status: 404,
					data: `name is: ${name}, price is: ${price}, image is: ${image}`,
				};
			}
		} else {
			return {
				status: 404,
				data: "ingresar el Id correcto por favor",
			};
		}*/
	}
	async delete(id) {
		const query = `DELETE from tasks WHERE id = '${id}'`;
		const respuesta = await this.pool.query(query);
		console.log(respuesta.rows);
		return respuesta.rows;
		/*let product = this.findOne(id);
		let index;
		products.forEach((item) => {
			if (item.id == id) {
				index = products.indexOf(item);
			}
		});

		if (product) {
			products.splice(index, 1);
			console.log(index);
			return {
				status: 200,
				response: "Elemento eliminado",
			};
		} else {
			return {
				status: 404,
				response: "por favor indique un id correcto",
			};
		}*/
	}
}
module.exports = TasksServices;
