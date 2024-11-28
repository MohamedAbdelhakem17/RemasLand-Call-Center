const mongoose = require("mongoose")

module.exports = async () => {
    await mongoose.connect(process.env.DATABASE_URI).then((conn) => {
        console.log(`Database Connected in ${conn.connection.host}`)
    })
}


