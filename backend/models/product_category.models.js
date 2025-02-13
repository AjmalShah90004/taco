import  {Schema, model} from "mongoose";
const product_category_Schema = new Schema({
    parent_category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true
    },
    category_name:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
export const Category = model('Category', product_category_Schema);