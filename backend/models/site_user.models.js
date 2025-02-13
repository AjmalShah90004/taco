import  {Schema, model} from "mongoose";
const site_user_Schema = new Schema({
    email_address:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    phone_number:{
        type:Number,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    avtar:{
        type: String
    },
    refresh_token:{
        type: String
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
export const Site_User = model('Site_User', site_user_Schema);