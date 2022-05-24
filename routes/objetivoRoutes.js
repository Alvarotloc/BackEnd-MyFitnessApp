import express from "express";
import {
  crearObjetivo,
  editarObjetivo,
  verObjetivo,
} from "../controllers/objetivoController.js";

const router = express.Router();

router.route('/').get(verObjetivo).put(editarObjetivo).post(crearObjetivo);

export default router;
