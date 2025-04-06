//update products set price = price + 1
db.products.updateMany({},{
    $inc: {
        price: 1
    }
})

// alter table products drop column tes
db.products.updateMany({
    name :"Asics"
},{
    $unset: {
        tes:""
    }
})

// alter table products rename variantsStock to stocks
db.products.updateOne({
    name : "Samsung S23"
}, {
    $rename : {
        variantsStock: "stocks"
    }
})

//update products set createdAt = current_date()
db.products.updateMany({},{
    $currentDate: {
        createdAt: {
            $type : "date"
        }
    }
})

