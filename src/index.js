const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product")

const app = express();
//PERMITE CAMBIAR EL PUERTO GLOBALMENTE AL ESTAR ASIGNADO A UNA VARIABLE
//'process.env.PORT' sirve para que al desplegar el app en un servicio de hosting abra el puerto que da el servicio.
const port = process.env.PORT || 9000;

//MIDDLEWARE
app.use(express.json());
app.use("/api", productRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//Conección MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
