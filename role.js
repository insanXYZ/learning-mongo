//create role on collection level
db.createRole({
  role: "session_management",
  privileges:[
    {
      resource: {
        db: "learning",
        collection :"tokens"
      },
      actions: ["insert"]
    }
  ],
  roles: [
  {
    role: "read",
    db: "learning"
  }
  ]
})

//get all roles
db.getRoles()

//delete role
db.dropRole("session_management")

db.updateRole()

//create user with custom role
db.createUser({
  user: "john",
  pwd: "john",
  roles: ["session_management"]
})
