import { Schema, model } from 'mongoose';

const delorianSchema = new Schema({
  chatId: Number,
  userId: Number,
  remindTime: Date,
  text: String,
  performed: Boolean,
  gmt: Number,
});

export const DelorianModel = model('DelorianModel', delorianSchema);
