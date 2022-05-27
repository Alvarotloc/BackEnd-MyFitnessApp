import Objetivo from '../models/Objetivo.js';

const crearObjetivo = async (req,res) => {
    const objetivo = new Objetivo(req.body);
    const objetivos = await Objetivo.find();
    if (objetivos.length > 0) {
        const error = new Error('Ya hay un objetivo creado');
        res.status(403).json({msg : error.message});
      return;
    }
    try {
        const objetivoAlmacenado = await objetivo.save();
        res.json(objetivoAlmacenado);
    } catch (error) {
        console.log(error)
    }
}
const editarObjetivo = async (req,res) => {
    const {id} = req.body;
    const objetivo = await Objetivo.findById(id);

    if(!objetivo){
        const error = new Error('No hay objetivo definido, ¿Quieres crear uno?');
        res.status(404).json({msg : error.message});
        return;
    }

    objetivo.KcalDiarias = req.body.KcalDiarias || objetivo.KcalDiarias;
    objetivo.peso = req.body.peso || objetivo.peso;
    objetivo.fecha = req.body.fecha || objetivo.fecha;

    try {
        const objetivoAlmacenado = await objetivo.save();
        res.json(objetivoAlmacenado);
    } catch (error) {
        console.log(error)
    }
}
const verObjetivo = async (req,res) => {
    const objetivo = await Objetivo.find();
    if(objetivo.length <= 0){
        const error = new Error('No hay objetivo definido, ¿Quieres crear uno?');
        res.status(404).json({msg : error.message});
        return;
    }
    try {
        res.json(objetivo);
    } catch (error) {
        console.log(error)
    }
}
const eliminarObjetivo = async (req,res) => {
    const {id} = req.body;
    const objetivo = await Objetivo.findById(id);
    if(!objetivo){
        const error = new Error('No hay objetivo definido, ¿Quieres crear uno?');
        res.status(404).json({msg : error.message});
        return;
    }
    try {
        await objetivo.deleteOne();
        res.json({ msg: "Objetivo Eliminado" });
    } catch (error) {
        console.log(error)
    }
}

export {
    crearObjetivo,
    editarObjetivo,
    verObjetivo,
    eliminarObjetivo
}