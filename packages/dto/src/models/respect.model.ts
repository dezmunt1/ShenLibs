import { Schema, model } from 'mongoose';

const respectSchema = new Schema({
  cbId: Number,
  chatId: Number,
  userId: Number,
  messageId: Number,
  text: String,
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 },
});

export const RespectModel = model('RespectModel', respectSchema);
