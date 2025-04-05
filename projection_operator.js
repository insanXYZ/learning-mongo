//select _id , name , tags from products
db.products.find({},{
    name: 1,
    tags: 1,
})

//select all field without name from products
db.products.find({},{
    name: 0
})

//select _id, name, tags[first] from products
db.products.find({},{
    name: 1,
    tags: {
        $elemMatch : {
            $in: ["running"]
        }
    }
})

//select _id, name, tags[first] from products where tags is not null
db.products.find({
    tags: {
        $exist: true
    }
},{
    "tags.$" : 1
})

// select _id, name ,tags[0-1] from products where tags is not null
db.products.find({
    tags: {
        $exist: true
    }
},{
    name: 2,
    tags :{
        $slice:2
    }
})