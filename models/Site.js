const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate-v2');

var siteSchema = Schema({
  url: {
    type: String,
    required: true,
  },
  solved: { 
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
});

siteSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Site', siteSchema);