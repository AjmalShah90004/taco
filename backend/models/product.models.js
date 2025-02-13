import  {Schema, model} from "mongoose";
const product_Schema = new Schema({
    product_item_default_id:{
        type:Number
    },
    product_item_id:{
        type: []
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    tags:{
        type:[]
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
export const Product = model('Product', product_Schema);