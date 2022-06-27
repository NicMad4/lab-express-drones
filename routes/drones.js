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

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
