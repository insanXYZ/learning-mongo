//where _id = name
db.products.find({
  $expr: { 
    $eq: ["$_id","$name"]
  }
})

//where year is not null and type(name) = string
db.products.find({
  $jsonSchema: {
    required: ["year"], 
    properties : { 
      name: {
        type: "string"
      }
    }
  }
})

//where price mod 1000 = 0
db.products.find({
  price : { 
    $mod :[1000,0]
  }
})

//where description like %premium%
db.products.find({
  description: { 
    $regex: /premium/,
    $options: "i"
  }
})

//will use js function, where price > 2500
db.products.find({
  $where : function(){ 
    return this.price > 2500
  }
})


