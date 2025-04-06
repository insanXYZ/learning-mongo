//create index
db.products.createIndex({
  name: 1
})

//get all index on collection
db.products.getIndexes()

//debug with index
//we can get information about using index or not with look object winningPlan.inputStage.stage
//IXSCAN = using indexing
//COOLSCAN = without indexing
db.products.find({
  name: "Ortuseight lunar"
}).explain()

//compound index
//note: if we create compound index(name,tags)
//its mean we can using IXSCAN if query like name and name tags.
db.products.createIndex({
  name : 1,
  tags : 1,
})


