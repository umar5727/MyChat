import mongoose, { Document, Schema } from "mongoose";


export interface Message extends Document {
    content: string,
    createdAt: Date,
}
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})
export interface User extends Document {
    fullName: string,
    image: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: Boolean,
    messages: Message[]
    // refereshToken: string,
    // accessToken: string,

}
const UserSchema: Schema<User> = new Schema({
    fullName: {
        type: String,
        required: true,
        toLowerCase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    // refereshToken:{
    //     type:String,

    // },
    // accessToken:{
    //     type:String
    // },
    verifyCode: {
        type: String,
        required: [true, 'verify code is required']
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'verify code Expiry is required'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    messages: [MessageSchema]
})
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)


export default UserModel;


  