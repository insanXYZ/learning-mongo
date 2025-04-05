//LOGICAL OPERATOR
//`db.<collectionName>.find({
//$operator: [
//    {},
//    {}
//  ]
//})`

//where {} and {}
db.products.find({
  $and:[ 
    {
      tags: {
        $in : ["laptop"]
      }
    },{
      price : {
        $gte : 5000
      }
    }
  ]
})

//where {} or {}
db.products.find({
  $or:[ 
    {
      tags: {
        $in : ["laptop"]
      }
    },{
      price : {
        $gte : 5000
      }
    }
  ]
})

//where {} nor {}
db.products.find({
  $nor:[ 
    {
      tags: {
        $in : ["laptop"]
      }
    },{
      price : {
        $gte : 5000
      }
    }
  ]
})

//where tags not in []
db.products.find({
  tags : {
    $not : { 
      $in : ["laptop"]
    }
  }
})


