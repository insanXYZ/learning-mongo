//read/search/find document
//db.<collectionName>.find(query)
db.products.find({"price":2300})
db.products.find({"tags","shoes"})
db.products.find({"variantsStock.12/256":5})

//comparison operator
//`db.<collectionName>.find({
//field: {
//    $operator : val
//  }
//})`
db.products.find({
  price: {
    $gt: 3000
  }
})

