const express = require ("express");
const app = express();
const path = require ("path");
const mainrouter= require ("./routes/mainRoutes")
const bsasRoutes = require ("./routes/bsasRoutes")
const cordobaRoutes = require ("./routes/cordobaRoutes")
const corrientessRoutes = require ("./routes/corrientesRoutes")
const otrosRoutes = require ("./routes/otrosRoutes")


app.use(express.static(__dirname + '/public'));

app.listen (3000, function(){
    console.log ("servidor funcionando")
});



app.get ("/bsas", bsasRoutes );
