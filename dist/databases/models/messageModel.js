// models/MessageModel.ts
import { model, Schema } from "mongoose";
var MessageModel = model("message", new Schema({
    shareId: { type: Number, required: true, unique: true },
    messageIds: { type: [Number], required: true },
}));
export default MessageModel;
