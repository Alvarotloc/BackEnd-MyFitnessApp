import express from 'express'; // Importamos el framework Express para facilitar la creación del servidor
import conectarDB from './config/bbdd.js';
import comidaRoutes from './routes/comidaRoutes.js';
import dotenv from 'dotenv';

const servidor = express(); // Levantamos el servidor llamando express

servidor.use(express.json()) // El equivalente al antiguo body-parser, para poder leer las request

dotenv.config();

conectarDB(); //Nos conectamos a la bbdd

servidor.use('/api/comidas',comidaRoutes)

const port = process.env.PORT || 4000 // Ya que a la hora de hacer el deployment cada host asigna un puerto distinto le decimos que use la variable de entorno PORT, si no, el puerto 4000

servidor.listen(port,() => { // Le decimos que escuche el puerto
    console.log(`Servidor escuchando en el puerto ${port}`)
})