import  {Schema, model} from "mongoose";
const order_return_Schema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    },
    order_line_id:{
        type:[],
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    order_return_amount:{
        type:Number
    },
    order_return_approval:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order_Return_Approval"
    }
},{timestamps:true});
export const Order_Return = model('Order_Return', order_return_Schema);