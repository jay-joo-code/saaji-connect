const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate-v2');

var siteSchema = Schema({
  url: {
    type: String,
    required: true,
  },
  solved: { 
    type: Boolean
  },
  state: { // 0 - 대기, 1 - 해결, 2 - 불가
    type: String,
    required: true,
    default: 0
  },
  cmts: {
    type: [{
      text: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: () => new Date()
      },
      isAdmin: {
        type: Boolean,
        default: false
      }
    }],
    default: []
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
});

siteSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Site', siteSchema);