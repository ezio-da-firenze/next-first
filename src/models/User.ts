import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username required"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: true,
        match: [/.+\@+\..+/, "Please use valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema],
});

const UserModel =
    (mongoose.models.User as mongoose.Model<User>) ||
    mongoose.model<User>("User", UserSchema);

export default UserModel;
