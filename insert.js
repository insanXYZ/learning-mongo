//add documents to collection
//db.<collectionName>.insertOne(document)
db.products.insertOne({
  "name":"thinkpad x270",
  "description":"business laptop",
  "price":5000,
  "category": "computer and handphone",
  "tags":["laptop"]
})

//add many document to collection
//db.<collectionName>.insertMany([document])
db.products.insertMany([
  {
    "name":"iphone 16 pro max",
    "description":"flagship handphone",
    "tags":["handphone"],
  "category": "computer and handphone",
    "price":7500,
    "year":2025
  },
  {
    "name":"Ortuseight lunar",
    "description":"Premium sport shoes",
    "category" : "fashion",
    "tags":["shoes","running"],
    "price":2300
  }
])


db.customers.insertMany([
  {
    name: "lapsong",
    customfields : {
      hobby : ["eat","riding"],
      gender: "male"
    }
  },
  {
    name: "sam",
    customFields: {
      gender: "female",
      address: "bengkok"
    }
  }
])

db.orders.insertMany([
  {
    item : "Ortuseight lunar",
    price : 4600,
    quantity : 2
  },
  {
    item : "Samsung S23",
    price : 27000,
    quantity : 3
  },
])

//insert embedded document
db.products.insertOne(
  {
    "name":"Samsung S23",
    "description":"flagship Samsung handphone",
    "tags":["handphone"],
    "category" : "computer and handphone",
    "price": 9000,
    "variantsStock": {
      "12/256": 5,
      "12/512": 10,
    },
  }
)

//custom _id
db.products.insertOne(
  {
    "_id":"Asics",
    "name":"Asics",
    "description":"Super premium sport shoes",
    "category" : "fashion",
    "tags":["shoes","running","trail run"],
    "price": 7800,
  }
)

