const path = require ("path")

const mainController = {
    index: function(req,res){ 
        console.log("un usuario entro al index");
        res.sendFile (path.join (__dirname, "../views/index.html"));
    },

    }

    module.exports = mainController; 