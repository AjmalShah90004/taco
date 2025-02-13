import  {Schema, model} from "mongoose";
const product_variation_Schema = new Schema({
    product_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product_Item"
    },
    variation_option_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Variation_Option"
    }
});
export const Product_Variation = model('Product_Variation', product_variation_Schema);