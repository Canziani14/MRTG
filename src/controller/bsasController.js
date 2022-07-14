const path = require("path")

const bsasController = {
    index: function (req, res) {
        console.log("un usuario entro al index");
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    barracas: function (req, res) {
        console.log("un usuario entro al home");
        res.sendFile(path.join(__dirname, "../views/mrtg/45.169.104.118_ether1.html"));
    },
}

module.exports = bsasController; 