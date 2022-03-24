const mongoose = require('mongoose')

const conexao = async() => {

var atlas = await mongoose.connect('mongodb+srv://userAdmin:270506Lu@fiaptecnico.solkl.mongodb.net/fiap')
}

module.exports = conexao