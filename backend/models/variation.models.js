import  {Schema, model} from "mongoose";
const variation_Schema = new Schema({
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    name:{
        type:String,
        required:true
    },
    is_active:{
        type:Boolean,
        default:true
    }
});
export const Variation = model('Variation', variation_Schema);