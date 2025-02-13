import  {Schema, model} from "mongoose";
const cart_Schema = new Schema({
 user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    }

});
export const Cart = model('Cart', cart_Schema);