import mongoose from "mongoose";

const comidaSchema = mongoose.Schema({
  nombre : {
    type     : String,
    required : true,
    trim     : true,
  },
  imagen: {
    type     : String,
  },
  gramos : {
    type     : Number,
    required : true,
    trim     : true,
  },
  proteinas : {
    type     : Number,
    required : true,
    trim     : true,
  },
  grasas : {
    type     : Number,
    required : true,
    trim     : true,
  },
  hidratos : {
    type     : Number,
    required : true,
    trim     : true,
  },
  kcal : {
    type     : Number,
    required : true,
    trim     : true,
  },
});

const Comida = mongoose.model("Comida", comidaSchema);
export default Comida;
