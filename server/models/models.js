const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Tasks = sequelize.define('tasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: true },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false }
})

const Lists = sequelize.define('lists', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
})

const ListTasks = sequelize.define('list_tasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

Lists.hasOne(ListTasks)
Tasks.hasMany(ListTasks)

module.exports = {
    Tasks, Lists, ListTasks
}
