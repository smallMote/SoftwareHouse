const SoftwareSchema = require('../schema/SoftwareSchema');
// 产品教程
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tutorial', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    software_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'softwareId'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'content'
    }
  }, { freezeTableName: true, tableName: 't_tutorial' });
};
