//best practice for create user, is swith database to admin
use admin

db.createUser(
  {
    user: "insan",
    pwd: "insan",
    roles: [
      "userAdminAnyDatabase",
      "readWriteAnyDatabase"
    ]
  }
)

db.createUser({
  user: "read",
  pwd: "read",
  roles: [
    {
      role: "read",
      db: "learning"
  }
  ]
})

db.createUser({
  user: "readw",
  pwd: "readw",
  roles: [
    {
      role: "readWrite",
      db: "learning"
  }
  ]
})

//get all users
db.getUsers()

//drop user
db.dropUser("readw")

//update user
db.updateUser("read",{
  roles: [
    {role: "readWrite",db:"products"},
    {role: "readWrite",db:"learning"}
  ]
})

//change user password
db.changeUserPassword("read","insan")

