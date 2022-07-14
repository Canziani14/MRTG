const express = require ("express");
const app = express();
const router = express.Router()
const bsasController = require("../controller/bsasController");

router.get ("/", bsasController.index )
router.get ("/barracas", bsasController.index )

module.exports = router;



