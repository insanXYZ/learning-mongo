//add fields to collection
db.products.aggregate([
  {
    $addFields : {
      totalRatings : {$sum : "$ratings"}
    }
  }
])

//add element to array
db.products.aggregate([
  {
    $addFields :{
      ratings : {
        $concatArrays : ["$ratings" ,[100]]
      }
    }
  }
])

//remove fields
db.products.aggregate([
  {
    $addFields : {
      createdAt : "$$Remove"
    }
  }
])

// remove with condition
db.products.aggregate([
  {
    $addFields : {
      createdAt : {
        $ifNull: ["$createdAt" , "$$REMOVE"]
      }
    }
  }
])

// group product by category and search average price and amount products
db.products.aggregate([
  {
    $group : {
      _id : "$category",
      averagePrice : {
        $avg : "$price"
      },
      totalProducts : {
        $sum : 1
      }
    }
  }
])

// for all products use null 
db.products.aggregate([
  {
    $group : {
      _id : null,
      averagePrice : {
        $avg : "$price"
      },
      totalProducts : {
        $sum : 1
      }
    }
  }
])

// pivot data
db.products.aggregate([
  {
    $group : {
      _id : "$category",
      products : {
        $push : "$$ROOT"
      }
    }
  }, 
  {
    $addFields : {
      averagePrice : {
        $avg : "$products.price"
      }
    }
  }
])

// limit 
db.products.aggregate([
  {
    $limit : 3
  },{
    $sort : {
      price : 1
    }
  }
])

// joining with lookup
db.orders.aggregate([
  {
    $lookup : {
      from: "products",
      localField: "item",
      foreignField : "name",
      as : "products"
    }
  }
])
