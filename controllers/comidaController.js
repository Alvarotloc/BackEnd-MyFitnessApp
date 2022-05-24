import Comida from "../models/Comida.js";

const obtenerComidas = async (req, res) => {
  try {
    const comidas = await Comida.find();
    if (comidas.length >= 0) {
      res.json(comidas);
      return;
    }
    res.json({ msg: "No hay comidas añadidas" });
  } catch (error) {
    console.log(error);
  }
};

const agregarComida = async (req, res) => {
  const comida = new Comida(req.body);
  try {
    const comidaAlmacenada = await comida.save();
    res.json(comidaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const editarComida = async (req, res) => {
  const { id } = req.body;

  const comida = await Comida.findById(id);

  if (!comida) {
    const error = new Error("No existe comida con ese id");
    res.status(404).json({ msg: error.message });
  }

  comida.nombre = req.body.nombre || comida.nombre;
  comida.imagen = req.body.imagen || comida.imagen;
  comida.gramos = req.body.gramos || comida.gramos;
  comida.kcal = req.body.kcal || comida.kcal;
  comida.proteinas = req.body.proteinas || comida.proteinas;
  comida.grasas = req.body.grasas || comida.grasas;
  comida.hidratos = req.body.hidratos || comida.hidratos;

  try {
    const comidaAlmacenada = await comida.save();
    res.json(comidaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const borrarComida = async (req, res) => {
  const { id } = req.body;

  const comida = await Comida.findById(id);

  if (!comida) {
    const error = new Error("No existe comida con ese id");
    res.status(404).json({ msg: error.message });
  }

  try {
    await comida.deleteOne();
    res.json({ msg: "Comida Eliminada" });
  } catch (error) {
    console.log(error);
  }
};

export { obtenerComidas, agregarComida, editarComida, borrarComida };
