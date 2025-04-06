//note: can only be on type string and []string field
db.products.createIndex({
  name: "text",
  description: "text",
  tags: "text"
}, {
    weights : {
      name : 10,
      description: 5,
      tags: 1
    }
  })


//search with text "shoes"
db.products.find({
  $text: {
    $search: "shoes"
  }
})

//search with text "shoes" or "handphone"
db.products.find({
  $text : {
    $search: "shoes handphone" 
  }
})

//search with text "shoes handphone"
db.products.find({
  $text : {
    $search: '"shoes handphone"' 
  }
})


//search with text "shoes" and not "handphone"
db.products.find({
  $text : {
    $search: "shoes -handphone" 
  }
}).explain()

//get text score from result search
db.products.find({
  $text : {
    $search: "shoes handphone" 
  }
}, {
    searchScore: {
      $meta: "textScore"
    }
  })


