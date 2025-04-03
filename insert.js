//add documents to collection
//db.<collectionName>.insertOne(document)
db.products.insertOne({
  "name":"thinkpad x270",
  "description":"business laptop",
  "price":5000,
  "tags":["laptop"]
})

//add many document to collection
//db.<collectionName>.insertMany([document])
db.products.insertMany([
  {
    "name":"iphone 16 pro max",
    "description":"flagship handphone",
    "tags":["handphone"],
    "price":7500,
    "year":2025
  },
  {
    "name":"Ortuseight lunar",
    "description":"Premium sport shoes",
    "tags":["shoes","running"],
    "price":2300
  }
])

//insert embedded document
db.products.insertOne(
  {
    "name":"Samsung S23",
    "description":"flagship Samsung handphone",
    "tags":["handphone"],
    "price": 9000,
    "variantsStock": {
      "12/256": 5,
      "12/512": 10,
    },
  }
)
