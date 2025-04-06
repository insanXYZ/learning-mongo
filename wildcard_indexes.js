db.customers.createIndex({
  "customField.$**":1
})

db.customers.find({
  "customField.gender": "male"
}).explain()
