const mongoose = require('mongoose')

async function main() {
    mongoose.set("strictQuery", true);
    await mongoose.connect('mongodb://localhost:27017/getapet')
    console.log("conectou ao Mongoose!")
}

main().catch((err) => console.log(err))

module.exports = mongoose