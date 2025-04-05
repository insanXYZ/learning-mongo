//where year is exists
db.products.find({
  year : {
    $exists: true 
  }
})

//where type(price) = int
db.products.find({
  price : {
    $type : "int"
  }
})