const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://naufalrizqullahpondokit:O68BNY31XvHTOxjO@backend.t9x1o.mongodb.net/jwt_db?retryWrites=true&w=majority&appName=backend",
    {
        serverSelectionTimeoutMS: 5000
    }
);
serverSelectionTimeoutMS: 5000


mongoose.connection.on("connected",() => {
   console.log("Connected to MongoDB")
});

mongoose.connection.on("error", (err) =>{
    console.log(`MonoDB connection error: ${err}`)
})

module.exports = mongoose;