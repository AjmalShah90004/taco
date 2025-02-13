import  {Schema, model} from "mongoose";
const order_line_Schema = new Schema({
    product_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product_Item"
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        typeof:Number,
        required:true
    },
    discount_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Discount"
    }
});
export const Order_Line = model('Order_Line', order_line_Schema);