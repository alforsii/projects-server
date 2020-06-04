const { Schema, model } = require('mongoose');

const projectsSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
    },
    domain: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    imgPath: {
      type: String,
    },
    imgName: {
      type: String,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    ext: {
      type: String,
    },
    path: {
      type: String, // file path - location
    },
    imgUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Project', projectsSchema);
