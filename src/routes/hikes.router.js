// 1. Import rooms.router.js
const router = require('express').Router()

const { gethikes, getSingleHike, viewCreateHike, createHike, viewEditHike  } = require('./../controllers/hike.controller')

// 2. Routes

// 2.2 Crear

// a) Para observar el formulario
router.get("/crear", viewCreateHike)

// b) Para crear un libro
router.post("/crear", createHike)



// 2.1 Read (Lectura de los hikes creados, y un en especifico, o sea single)
router.get('/', gethikes)

router.get("/:hikeID", getSingleHike)




// 3. Edit (Hike)








// 4. Delete









// Export
module.exports = router



