import express from "express";
import {
  crearObjetivo,
  editarObjetivo,
  verObjetivo,
  eliminarObjetivo
} from "../controllers/objetivoController.js";

const router = express.Router();

router.route('/').get(verObjetivo).put(editarObjetivo).post(crearObjetivo).delete(eliminarObjetivo);

export default router;
