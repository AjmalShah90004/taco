import  {Schema, model} from "mongoose";
const order_payment_status_Schema = new Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    status:{
        type:String,
        enum:["SUCCESS","FAILED","PENDING"]
    }
});
export const Order_Payment_Status = model('Order_Payment_Status', order_payment_status_Schema);