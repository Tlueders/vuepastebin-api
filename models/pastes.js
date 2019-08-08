var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
  }
);

var Paste = sequelize.define('paste', {
    page_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    paste: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING
    }
});

sequelize.sync()
    .then(() => console.log('pastes table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = Paste;