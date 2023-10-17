const { DataTypes, Sequelize, INTEGER } = require('sequelize');

// DB data 
const Company = (sequelize) => {
  return sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    company_country: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    company_area: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    
    done: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 0,
    },
  });
};

module.exports = Company;
