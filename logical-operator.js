//LOGICAL OPERATOR
//`db.<collectionName>.find({
//$operator: [
//{},
//{}
//]
//})`

db.products.find({
  $and:[ //where {} and {}
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

db.products.find({
  $or:[ //where {} or {}
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

db.products.find({
  $nor:[ //where {} nor {}
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

db.products.find({
  tags : {
    $not : { //where tags not in []
      $in : ["laptop"]
    }
  }
})


