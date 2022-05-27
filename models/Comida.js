import mongoose from "mongoose";

const comidaSchema = mongoose.Schema({
  nombre : {
    type     : String,
    required : true,
    trim     : true,
  },
  categoria : {
    type     : String,
    required : true,
    trim     : true
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
  creado : {
    type     : String,
    default  : new Date().toLocaleDateString(),
  }
});

const Comida = mongoose.model("Comida", comidaSchema);
export default Comida;
