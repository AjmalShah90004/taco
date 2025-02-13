import  {Schema, model} from "mongoose";
const variation_option_Schema = new Schema({
    variation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Variation"
    },
    value:{
        type:String,
        required:true
    }
});
export const Variation_Option = model('Variation_Option', variation_option_Schema);