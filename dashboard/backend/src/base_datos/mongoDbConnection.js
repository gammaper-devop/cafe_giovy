const mongoose = require('mongoose')

function connection(){
    const MONGO_HOST = "localhost:27017"
    const MONGO_DB = "bdcafe"

    const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`

   mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        () => {
            console.log("DB connection successfull. Now DB is ready to use.")
        },
        (err) => {
            console.log("Connection err - ", err)
        }
    )
}

module.exports = connection