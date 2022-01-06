const mongoose = require('mongoose')
const Schema = mongoose.Schema   //Camel casing means saves in class or constructor function

const menuSchema = new Schema({          //skeleton or blue print 
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true }
})

module.exports = mongoose.model('Menu', menuSchema)