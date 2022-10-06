const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull: false    //Não aceita o valor NULL
    },
    occupation:{
        type: DataTypes.STRING,
        required: true  //Não aceita que o campo fique vazio
    },
    newsletter:{
        type: DataTypes.BOOLEAN,
    },
})

module.exports = User