import  {Schema, model} from "mongoose";
const site_menu_Schema = new Schema({
    name:{
        type: String,
        required: true,
        lowercase:true
    },
    url:{
        type:String
    },
    icon:{
        type:String
    },
    order_index:{
        type:Number
    },
    parent_id:{
        type:[],
        default:0
    },
    is_active:{
        type:Boolean,
        default:1
    },

});
export const Site_Menu = model('Site_Menu', site_menu_Schema);