db.products.deleteOne({
    name : "Asics"
})

db.products.deleteMany({
    name : {
        $exists: true
    }
})