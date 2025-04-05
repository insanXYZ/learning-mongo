//COMPARISON OPERATOR
//`db.<collectionName>.find({
//field: {
//    $operator : val
//  }
//})`
db.products.find({
  price: {
    $gt: 3000 //greater than
  }
})

db.products.find({
  price: {
    $eq: 3000 //equal
  }
})

db.products.find({
  price: {
    $gte: 3000 //greater than equal
  }
})

db.products.find({
  price: {
    $lt: 3000 //less than
  }
})

db.products.find({
  price: {
    $lte: 3000 //less than equal
  }
})

db.products.find({
  tags: {
    $in: ["handphone"] //binding value on array
  }
})

db.products.find({
  tags: {
    $nin: ["handphone"] //binding value not in array
  }
})

db.products.find({
  price: {
    $ne: 2500 //not equal
  }
})


