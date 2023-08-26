db = db.getSiblingDB("JCTF_CHALLENGE")

db.createCollection("Users", {
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

db.Users.insertMany([
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
