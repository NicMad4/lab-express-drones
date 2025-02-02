const express = require('express');
const Drone= require('../models/Drone.model')
const router = express.Router();

// require the Drone model here
router.get('/drones', (req, res, next) => {
  Drone
  .find()
    .then(response => {
      console.log("entra", { response });
      res.render("../views/drones/list.hbs", { response });
    })
    .catch(error => console.log(error));
});

router.get('/drones/create', (req, res, next) => res.render('drones/create-form.hbs'));


router.post('/drones/create', (req, res, next) => {
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    /*.then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.` */
    .then(() => res.redirect('/drones'))
    .catch(error => res.redirect('/drones/create'));
});
//prueba
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params
  Drone.findById(id)
  .then((response) => {
    res.render("/drones/update-form.hbs", { response });
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  console.log("Llego aquí desde formulario");
  console.log(req.params);
  Drone
    .deleteOne({id:req.params.id})
    .then(response=>{
      console.log("Eliminado correctamente")
      res.redirect("/drones")
    })
    .catch(e=>console.log(e))
});

module.exports = router;
