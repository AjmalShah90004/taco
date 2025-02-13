import  {Schema, model} from "mongoose";
const order_return_payment_Schema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    status:{
        type:String,
        enum:["PENDING","SUCCESS","FAILED","NOT REFUND"]
    },
    transaction_number:{
        type:Number
    },
    to_account_number:{
        type:Number
    }
},{timestamps:true});
export const Order_Return_Payment = model('Order_Return_Payment', order_return_payment_Schema);