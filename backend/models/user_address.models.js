import  {Schema, model} from "mongoose";
const user_address_Schema = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Site_User"
    },
    address_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    is_default:{
        type: Boolean,
        required:true
    }
});
export const User_Address = model('User_Address', user_address_Schema);