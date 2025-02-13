import  {Schema, model} from "mongoose";
const user_Schema = new Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    email_address:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    name:{
        type: String,
        required: true
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
    rolde_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: "Role"
    },
    is_active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
export const User = model('User', user_Schema);