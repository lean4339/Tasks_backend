const data = require("../data/data");
const products = data;
module.exports = {
	all: (req, res) => {
		const { size } = req.query;

		if (size) {
			if (size < products.length && size >= 0) {
				const productsPerSize = [];
				for (let i = 0; i < size; i++) {
					productsPerSize.push(products[i]);
				}
				res.status(200).json(productsPerSize);
			} else {
				res.status(404).json({
					mensaje: `error la base de datos es de ${data.length} productos hasta ahora. No se admiten numeros mayores a esta cantidad, ni menores a cero, ni palabras o letras.`,
				});
			}
		} else {
			res.status(200).json({
				products,
			});
		}
	},
	id: (req, res) => {
		const { id } = req.params;
		if (id < data.length && id >= 0) {
			res.status(200).json(products[id]);
		} else {
			res.status(404).json({
				mensaje: `error la base de datos es de ${data.length} productos hasta ahora. No se admiten numeros mayores a esta cantidad, ni menores a cero, ni palabras o letras.`,
			});
		}
	},
	create: (req, res) => {
		const body = req.body;
		console.log(body);
		res.status(200).json({
			mensaje: "datos recibidos",
			data: body,
		});
	},
	update: (req, res) => {
		const body = req.body;
		const { id } = req.params;
		if (id < data.length && id >= 0) {
			res.status(200).json({
				mensaje: "actualizacion en curso",
				data: [body, id],
			});
		} else {
			res.status(404).json({
				mensaje: `error la base de datos es de ${data.length} productos hasta ahora. No se admiten numeros mayores a esta cantidad, ni menores a cero, ni palabras o letras.`,
			});
		}
	},
	delete: (req, res) => {
		const { id } = req.params;
		if (id < products.length && id >= 0) {
			res.status(200).json({
				mensaje: "comenzando a eliminar",
				data: id,
			});
		} else {
			res.status(404).json({
				mensaje: `error la base de datos es de ${data.length} productos hasta ahora. No se admiten numeros mayores a esta cantidad, ni menores a cero, ni palabras o letras.`,
			});
		}
	},
};
