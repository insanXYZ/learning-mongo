//remove after 60 second
db.tokens.createIndex({
  createdAt: 1
}, {
  expireAfterSeconds: 60
})

db.tokens.insertOne({
  name: "jwt1",
  createdAt: new Date()
})

//unique index with ignore it if email has null
db.customers.createIndex({
  email:1
},{
  unique: true,
  sparse: true
})

//duplicate error
db.customers.updateMany({},{
  $set: {
    email: "john@example.com"
  }
})

//case insensitive
db.customers.createIndex({
  name:1
}, {
    collation: {
      locale:"en",
      strength:2
    }
  })

db.products.createIndex({
  price:1
},{
  partialFilterExpression: {
      price: {
        $gt: 7500
      }
    }
})

//will use IXSCAN
db.products.find({
  price: 7800
}).explain()
