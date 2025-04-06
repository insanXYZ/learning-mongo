// update products set rating[indexOf(30)] = 100
db.products.updateMany({
    ratings: 30
},{
    $set: {
        "ratings.$" : 100
    }
})

//update all val on arr ratings
db.products.updateMany({},{
    $set: {
        "ratings.$[]" : 100
    }
})

//update ratings index depend on arrayFilters
db.products.updateMany({},{
    $set : {
        "ratings.$[element]" : 100
    }
}, {
    arrayFilters : [
        {
            element : {
                $gte: 80
            }
        }
    ]
})

// update ratings with index
db.products.updateMany({}, {
    $set : {
        "ratings.0": 50,
        "ratings.1": 110,
    }
})

//append value to tags array, ignore if already exist
db.products.updateOne({
    name : "Samsung S23"
},{
    $addToSet : {
        tags : "android"
    }
})

//remove first(-1) or last(1) of ratings array
db.products.updateMany({}, {
    $pop : {
        ratings: 1
    }
})

// remove element of array depend condition
db.products.updateMany({},{
    $pull : {
        ratings : {
            $gte:70
        }
    }
})

//append val to ratings array
db.products.updateMany({},{
    $push : {
        ratings : 100
    }
})

//pull all element on arr
db.products.updateMany({},{
    $pullAll : {
        ratings : [50]
    }
})

//push each element on arr to ratings
db.products.updateMany({},{
    $push : {
        ratings : {
            $each : [100,200,300]
        }
    }
})

db.products.updateMany({},{
    $addToSet : {
        tags : {
            $each : [100,300]
        }
    }
})

// push to index 0
db.products.updateMany({},{
    $push : {
        ratings : {
            $each : [400,500],
            $position : 0
        }
    }
})

// add elements and sort
db.products.updateMany({},{
    $push : {
        ratings : {
            $each : [220,20],
            $sort : -1
        }
    }
})

//limit with slice 
db.products.updateMany({},{
    $push : {
        ratings : {
            $each : [400,500],
            $slice: -3
        }
    }
})