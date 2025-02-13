import {Schema, model} from "mongoose";
const address_Schema = new Schema({
    unit_number:{
        type: String,
        required: true,
        lowercase:true
    },
    street_number:{
        type:String
    },
    address_line1:{
        type:String
    },
    address_line2:{
        type:String
    },
    address_type:{
        type:String,
        enum:["HOME","OFFICE"]
    },
    city:{
        type:String
    },
    postal_code:{
        type:Number
    },
    country_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Country"
    },

});
export const Address = model('Address', address_Schema);