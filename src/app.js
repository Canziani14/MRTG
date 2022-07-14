const express = require ("express");
const app = express();
const path = require ("path");
const mainroutes= require ("./routes/mainRoutes")
const bsasRoutes = require ("./routes/bsasRoutes")
const cordobaRoutes = require ("./routes/cordobaRoutes")
const corrientessRoutes = require ("./routes/corrientesRoutes")
const otrosRoutes = require ("./routes/otrosRoutes")


app.use(express.static(__dirname + '/public'));

app.listen (3000, function(){
    console.log ("servidor funcionando")
});

app.get ("/", mainroutes );

app.get ("/bsas", bsasRoutes );
app.get ("/barracas", bsasRoutes)

app.get ("/corrientes", corrientessRoutes );

app.get ("/cordoba", cordobaRoutes );

app.get ("/otros", otrosRoutes );
