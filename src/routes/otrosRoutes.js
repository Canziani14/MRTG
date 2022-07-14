const express = require ("express");
const app = express();
const router = express.Router()
const otrosController = require("../controller/otrosController");

router.get ("/otros", otrosController.index )

module.exports = router;
