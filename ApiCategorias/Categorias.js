const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('[{"id" : 1, "nombre":"Electrónica"}], [{"id":2, "nombre": Electrodomesticos}]') ;
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});