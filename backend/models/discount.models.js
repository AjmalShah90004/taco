import  {Schema, model} from "mongoose";
const discount_Schema = new Schema({
    code:{
        type:String,
        unique:true,
        required:true
    },
    method:{
        type:String,
        enum:["PERCENTAGE","FLAT"],
        required:true
    },
    value:{
        type:Number,
        required:true
    },
    discount_expiry_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Discount_Expiry"
    },
    discount_category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Discount_Category"
    },
    is_active:{
        type:Boolean,
        default:true
    }

});
export const Discount = model('Discount', discount_Schema);