const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  data: {
      type: String,
      required: true,
  }
});

module.exports = mongoose.model('Todo', todoSchema);