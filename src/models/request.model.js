import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: "User",
        },
        requestType:{
            type:String,
            default:"equipment",
            enum:[
                "equipment",
                "court"
            ]
        },
        equipments:[
            {
                type: Schema.Types.ObjectId,
                ref: "Equipment",
                required:()=>{
                    return (requestType=="equipment");
                }
            }
        ],
    },
    {
        timestamps: true
    }
)

export const Request=mongoose.model("sport",requestSchema)

