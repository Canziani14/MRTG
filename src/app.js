const express = require ("express");
const app = express();
const path = require ("path");
const router= require ("./routes/mainRoutes")

app.use(express.static(__dirname + '/public'));

app.listen (3000, function(){
    console.log ("servidor funcionando")
});



app.use ("/bsas", bsasRoutes);
