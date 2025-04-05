//ELEMENT OPERATOR 
db.products.find({
  year : {
    $exists: true //where year is exists
  }
})

db.products.find({
  price : {
    $type : "int" //where price type is int
  }
})

//EVALUATION OPERATOR
db.products.find({
  $expr: { //where _id = name
    $eq: ["$_id","$name"]
  }
})

db.products.find({
  $jsonSchema: {
    required: ["year"], //where year is not null
    properties : { //and type(name) = string
      name: {
        type: "string"
      }
    }
  }
})

db.products.find({
  price : { //where price mod 1000 = 0
    $mod :[1000,0]
  }
})

db.products.find({
  description: { //where description like %premium%
    $regex: /premium/,
    $options: "i"
  }
})

db.products.find({
  $where : function(){ //will use js function, where price > 2500
    return this.price > 2500
  }
})


