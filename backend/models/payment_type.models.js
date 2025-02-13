import  {Schema, model} from "mongoose";
const payment_type_Schema = new Schema({
   value:{
        type:String,
        required:true,
        enum:["Credit Card","Debit Card","UPI","Net Banking","Paypal","Cash On Delivery"]
    },
    is_active:{
        type:Boolean,
        default:true
    }
});
export const Payment_Type = model('Payment_Type', payment_type_Schema);