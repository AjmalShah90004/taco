import  {Schema, model} from "mongoose";
const country_Schema = new Schema({
    country_name:{
        type: String
    },
    is_active:{
        type:Boolean,
        default:true
    }
    
});
export const Country = model('Country', country_Schema);