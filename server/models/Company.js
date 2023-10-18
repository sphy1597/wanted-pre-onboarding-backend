const { DataTypes, Sequelize } = require('sequelize');

// DB data 
const Company = (sequelize) => {
  return sequelize.define('Company', {
    company_id: {
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
  }, {
    freezeTableName: true, // 테이블 이름을 고정
  });
};

module.exports = Company;
