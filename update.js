// update products set description = "ios flagship" where name = "iphone 16 pro max"
db.products.updateOne({
    name:"iphone 16 pro max"
},{
    $set : {
        description: "ios flagship"
    }
})

db.products.updateMany({},{
    $set : {
        ratings: [80,30,50,10]
    }
})

db.products.updateMany({},{})

// replace document 
db.products.replaceOne({},{})