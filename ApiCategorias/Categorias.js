const express = require('express');
const app = express();
const PORT = 3000;

app.get('/Categorias/:id/:nombre', (req,res) => {
    const id= req.params.id;
    const nombre= req.params.nombre;
    res.status(200).json({id:id,nombre:nombre}) ;
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});