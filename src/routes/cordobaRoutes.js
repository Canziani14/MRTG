const express = require ("express");
const app = express();
const router = express.Router()
const cordobaController = require("../controller/cordobaController");

router.get ("/cordoba", cordobaController.index)

module.exports = router;
