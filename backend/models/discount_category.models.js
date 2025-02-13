import  {Schema, model} from "mongoose";
const discount_category_Schema = new Schema({
    category_type:{
        type:String,
        enum:["PRODUCT CATEGORY","PRODUCT","ALL","SUBSCRIPTION"]
    },
    is_active:{
        type:Boolean,
        default:true
    }

});
export const Discount_Catgegory = model('Discount_Catgegory', discount_category_Schema);