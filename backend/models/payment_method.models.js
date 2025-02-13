import  {Schema, model} from "mongoose";
const payment_method_Schema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    },
    payment_type_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment_Type"
    },
    provider:{
        type:String,
        required:true
    },
    account_number:{
        type:Number
    },
    expiry_date:{
        type:String
    },
    is_default:{
        typeof:Boolean,
        default:0
    }
});
export const Payment_Method = model('Payment_Method', payment_method_Schema);