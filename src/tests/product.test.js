const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../routes/product.js');

app.use(express.json());
app.use('/', router);

// const server = app.listen(9000, () => {
//     console.log('Server listening on port 9000');
// });

describe('API endpoints', () => {
  // Prueba para POST /products
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/products')
    //   .send({
    //     // ... datos del producto ...
    //     name: "iPhone",
    //     stock: 11,
    //     price: 2000.00
    //   });

    expect(response.statusCode).toBe(200);
    // Se puede agregar más expectativas (expect)
  });

  // Prueba para GET /products
  it('should get all products', async () => {
    const response = await request(app)
        .get('/products');

    expect(response.statusCode).toBe(200);
    // Se puede agregar más expectativas (expect)
  }, 30000);

  // Prueba para PUT /products/:id
  it('should update a product', async () => {
    const response = await request(app)
      .put('/products/1') // Reemplaza '1' con un ID existente
      .send({
        // ... datos actualizados del producto ...
      });

    expect(response.statusCode).toBe(200);
    // Se puede agregar más expectativas (expect)
  });

  // Prueba para DELETE /products/:id
  it('should delete a product', async () => {
    const response = await request(app).delete('/products/1'); // Reemplaza '1' con un ID existente

    expect(response.statusCode).toBe(200);
    // Se puede agregar más expectativas (expect)
  });
});

// afterAll((done) => {
//     server.close(done);
// });
  