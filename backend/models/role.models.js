import  {Schema, model} from "mongoose";
const role_Schema = new Schema({
    role_name:{
        type: String,
        enum:["Admin","Inventory Operator","Order Processor"]
    },
    is_active:{
        type:Boolean,
        default:true
    }
});
export const Role = model('Role', role_Schema);