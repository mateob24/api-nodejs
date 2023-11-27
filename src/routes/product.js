const express = require("express");
const productSchema = require("../models/product")

const router = express.Router();

//Crear el producto
router.post('/products', (req, res) => {
    const product = productSchema(req.body);
    product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 });

//Obtener todos los productos creados
router.get('/products', (req, res) => {
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 });

//Actualizar un producto
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, stock, price } = req.body;
    productSchema
    .updateOne({ _id: id }, { $set: {name, stock, price} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 });

 //Eliminar un usuario
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 });

 module.exports = router;