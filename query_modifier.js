// select count(*) from products
db.products.find({}).count()

// select count(*) from products limit 2
db.products.find({}).limit(2)

// select count(*) from products offset 2
db.products.find({}).skip(2)

// select * from products order by name asc, price desc
db.products.find({}).sort({
    name:1,
    price:-1
})