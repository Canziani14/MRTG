const express = require ("express");
const app = express();
const router = express.Router()
const corrientesController = require("../controller/corrientesController");

router.get ("/corrientes", corrientesController.index )

module.exports = router;



