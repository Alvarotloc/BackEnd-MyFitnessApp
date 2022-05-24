import express from "express";
import {
  obtenerComidas,
  agregarComida,
  editarComida,
  borrarComida,
} from "../controllers/comidaController.js";

const router = express.Router();

router
  .route("/")
  .get(obtenerComidas)
  .post(agregarComida)
  .put(editarComida)
  .delete(borrarComida);

export default router;
