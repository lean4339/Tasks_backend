
const express = require("express");
const faker = require("faker");
const router = express.Router();
const controller = require("../controllers/productsController");
const TasksServices = require("../services/tasksServices");
const service = new TasksServices();
router.get("/", async (req, res) => {
	res.status(200).json(await service.find());
});

router.post("/", async (req, res) => {
	const { name, price, image } = req.body;
	try {
		if (name && price && image) {
			const product = await service.create(name, price, image);
			res.status(200).json(product);
		} else {
			res.status(404).json({
				mensaje: `name is: ${name}, price is: ${price} and image is: ${image}.`,
			});
		}
	} catch (error) {
		res.status(404).json({
			mensaje: error,
		});
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		console.log(id);
		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).json({
				mensaje: "el id es incorrecto",
			});
		}
	} catch (error) {
		res.status(404).json({
			mensaje: error,
		});
	}
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, price, image } = req.body;
	try{
        const data = await service.update(id, name, price, image);
        res.status(200).json(data);
    }
    catch(error){
        res.status(404).json({
            mensaje: `hola soy el error ${error}`
        });
    }
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try{
        let response = await service.delete(id);
	res.status(200).json(response);
    }
    catch(error){
        res.status(404).json({
            mensaje: error
        });
    }
});

module.exports = router;
