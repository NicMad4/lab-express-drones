// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const mongoose = require("mongoose");
  const Drone = require("../models/Drone.model");
  const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab-express-Drones'
  
  
  mongoose
    .connect(MONGO_URI)
    .then((x) => {
    console.log(`Connected to Mongo! Database name:"${x.connections[0].name}"`)
    return Drone.insertMany(drones);    
})
.then((response) => {
    console.log("Peliculas agregadas correctamente");
    // hacer la desconeccion
    mongoose.connection.close();
  })
  
  .catch((err) => {
      console.log(err);
    });
  
