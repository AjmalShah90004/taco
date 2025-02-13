import  {Schema, model} from "mongoose";
const cart_item_Schema = new Schema({
 cart_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    },
    product_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product_Item"
    },
    qty:{
        type:Number,
        required:true
    }

});
export const Cart_Item = model('Cart_Item', cart_item_Schema);