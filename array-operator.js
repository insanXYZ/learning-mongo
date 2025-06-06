//where tags = shoes and tags = running
db.products.find({
  tags : {
    $all : ["shoes","running"] 
  }
})

//where tags in ("trail run")
db.products.find({
  tags: {
    $elemMatch : {
      $in : ["trail run"] 
    }
  }
})

//where count(tags) = 3
db.products.find({
  tags : {
    $size : 3 
  }
})
