import  {Schema, model} from "mongoose";

const collection_Schema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    collection_base:{
        type:String,
        enum:["PRODUCTS","OFF"]
    },
    collection_values:{
        type:[]

    }
})

export const Collection = new model("Collection",collection_Schema);