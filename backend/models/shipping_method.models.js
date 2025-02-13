import  {Schema, model} from "mongoose";
const shipping_method_Schema = new Schema({
    name:{
        type:String,
        enum:["Next Day","Same Day","Quick Mint","3-4 Working Days"]
    },
    price:{
        type:Number,
        required:true
    },
    is_active:{
        type:Boolean,
        default:true
    }
});
export const Shipping_Method = model('Shipping_Method', shipping_method_Schema);