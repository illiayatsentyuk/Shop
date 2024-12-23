const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'I562530y2009', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;