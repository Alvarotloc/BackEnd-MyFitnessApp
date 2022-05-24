import mongoose from "mongoose";

const objetivoSchema = mongoose.Schema({
    KcalDiarias : {
        type : Number,
        required : true,
        trim : true
    },
    peso : {
        type : Number,
        required : true,
        trim : true
    },
    fecha : {
        type : Date,
        required : true,
        default : Date.now()
    }
})
const Objetivo = mongoose.model("Objetivo", objetivoSchema);
export default Objetivo;