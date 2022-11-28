const Sequelize = require('sequelize')
const db = require('../utils/database')

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  rank: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, {timestamps: false})

module.exports = User