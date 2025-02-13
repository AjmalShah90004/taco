import  {Schema, model} from "mongoose";
const order_return_approval_Schema = new Schema({
    approval_status:{
        type:String,
        enum:["PENDING FOR APPROVED","NOT APPROVED","APPROVED"]
    }
});
export const Order_Return_Approval = model('Order_Return_Approval', order_return_approval_Schema);