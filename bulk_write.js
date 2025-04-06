db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        name: "john doe",
        hobbies:["coding","reading"],
        address: "paradise" 
      }
    }
  },
  {
    updateOne: {
      filter : {
        name: "john doe"
      },
      update: {
        $set: {
          age: 35
        }
      }
    }
  }
])
