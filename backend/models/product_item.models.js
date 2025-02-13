import  {Schema, model} from "mongoose";
const product_item_Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    sku:{
        type: String,
        required:true
    },
    url:{
        type: String,
        required:true,
        unique:true
    },
    stock:{
        type:Number,
        default:0
    },
    product_image:{
        type:[],
        required:true
    },
    product_thumbs:{
        type:[]
    },
    price:{
        type:Number,
        required:true
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
export const Product_Item = model('Product_Item', product_item_Schema);