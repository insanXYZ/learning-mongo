//read/search/find document
//db.<collectionName>.find(query,projection)
db.products.find({"price":2300})
db.products.find({"tags","shoes"})
db.products.find({"variantsStock.12/256":5})
