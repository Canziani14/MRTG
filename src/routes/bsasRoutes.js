const express = require ("express");
const app = express();
const router = express.Router()
const bsasController = require("../controller/bsasController");

router.get ("/bsas", bsasController.index )
router.get ("/barracas", bsasController.barracas)



module.exports = router;



