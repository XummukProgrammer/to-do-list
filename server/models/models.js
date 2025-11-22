const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Lists = sequelize.define('lists', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
})

const Tasks = sequelize.define('tasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: true },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false }
})

Lists.hasOne(Tasks)

module.exports = {
    Tasks, Lists
}
