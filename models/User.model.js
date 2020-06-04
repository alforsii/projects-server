const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    city: String,
    state: String,
    country: String,
    phone: String,
    password: String,
    path: { type: String, default: '/images/default-img.png' },
    userChatBoards: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Chat',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', usersSchema);
