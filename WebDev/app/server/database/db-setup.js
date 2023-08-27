db = db.getSiblingDB("JCTF_CHALLENGE")

db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",   
            properties: {
                UUID: {
                  bsonType: "int",
                  description: "must be a string and is required"
                },
                Username: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                Password: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }
})

db.users.insertMany([
    {
        UUID: 1,
        Username: "dd482",
        Password: "example",
    },
    {
        UUID: 2,
        Username: "john",
        Password: "example",
    }
])

db.createUser(
    {
      user: "MyApp",
      pwd:  "example",   // or cleartext password
      roles: [ { role: "readWrite", db: "JCTF_CHALLENGE" } ]
    }
  )
