import  {Schema, model} from "mongoose";
const order_status_Schema = new Schema({

    status:{
        type:String,
        enum:["PENDING","PROCESS","ON HUB","ON THE WAY","DELIVERED"]
    }
});
export const Order_Status = model('Order_Status', order_status_Schema);