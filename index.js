import express from "express"; // Importamos el framework Express para facilitar la creación del servidor
import conectarDB from "./config/bbdd.js";
import comidaRoutes from "./routes/comidaRoutes.js";
import objetivoRoutes from "./routes/objetivoRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

const servidor = express(); // Levantamos el servidor llamando express

servidor.use(express.json()); // El equivalente al antiguo body-parser, para poder leer las request

dotenv.config();

conectarDB(); //Nos conectamos a la bbdd

//* Configurar CORS

const whiteList = [
  process.env.FRONTEND_URL_BASE,
  process.env.FRONTEND_URL_OBJ,
  process.env.FRONTEND_URL_AGREGAR,
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de Cors"));
    }
  },
};

//* Routing

servidor.use(cors(corsOptions));

servidor.use("/api/comidas", comidaRoutes);
servidor.use("/api/objetivo", objetivoRoutes);

const port = process.env.PORT || 4000; // Ya que a la hora de hacer el deployment cada host asigna un puerto distinto le decimos que use la variable de entorno PORT, si no, el puerto 4000

servidor.listen(port, () => {
  // Le decimos que escuche el puerto
  console.log(`Servidor escuchando en el puerto ${port}`);
});
