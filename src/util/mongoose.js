module.exports = {
  multipleMongooseToObject: (mongooseArray) => {
    return mongooseArray.map(mongoose => mongoose.toObject());
  },
  MongooseToObject: (mongooseItem) => {
    return mongooseItem ? mongooseItem.toObject() : mongooseItem;
  }
}