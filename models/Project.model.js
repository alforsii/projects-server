const { Schema, model } = require('mongoose');

const projectsSchema = new Schema(
  {
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
    imgUrl: {
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
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Project', projectsSchema);
