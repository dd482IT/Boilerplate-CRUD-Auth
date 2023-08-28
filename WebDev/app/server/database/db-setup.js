db = db.getSiblingDB("JCTF_CHALLENGE")

db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",   
            properties: {
                Email: {
                    bsonType: "string",
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

db.users.createIndex( { "Username": 1}, { unique: true } )
db.users.createIndex( { "Email":1 }, { unique: true } )

db.createUser(
    {
      user: "MyApp",
      pwd:  "example",   // or cleartext password
      roles: [ { role: "readWrite", db: "JCTF_CHALLENGE" } ]
    }
  )
