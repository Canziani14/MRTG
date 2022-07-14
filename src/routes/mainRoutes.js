const express = require ("express");
const app = express();
const router = express.Router()
const mainController = require ("../controller/mainController");
const bsasController = require("../controller/bsasController");
const cordobaController = require("../controller/cordobaController");
const corrientesController = require("../controller/corrientesController");
const otrosController = require("../controller/otrosController");
const { Router } = require("express");

router.get ("/", mainController.index)









module.exports = router;