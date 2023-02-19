import { Schema, model } from 'mongoose';

const articleSchema = new Schema({
  resource: String,
  data: [String],
  funcName: {
    type: String,
    enum: ['comss', 'xakep', 'habr'],
  },
  date: Date,
});

export const ArticleModel = model('ArticleModel', articleSchema);
