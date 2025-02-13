import  {Schema, model} from "mongoose";
const discount_expiry_Schema = new Schema({
    expiry_type:{
        type:String,
        enum:["NoOfCustomer","Date"]
    },
    value:{
        type:Number,
        required:true
    },
    is_active:{
        type:Boolean,
        default:true
    }

});
export const Discount_Expiry = model('Discount_Expiry', discount_expiry_Schema);