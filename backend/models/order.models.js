import  {Schema, model} from "mongoose";
const order_Schema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    },
    payment_method_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment_Method"
    },
    order_date:{
        type:Date,
        required:true
    },
    shipping_address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    shipping_method_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shipping_Method"
    },
    order_total:{
        typeof:Number
    },
    order_status_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order_Status"
    }
});
export const Order = model('Order', order_Schema);