// Importar Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bingo!');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está funcionando en http://localhost:3000');
});