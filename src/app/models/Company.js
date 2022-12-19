const mongoose = require('mongoose');
// auto create slug
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Company = new Schema({
  name: { type: String, required: true },
  website: { type: String, required: true },
  address: { type: String, required: true },
  logo: { type: String, required: true },
  slug: { type: String, slug: 'name', unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Company', Company);