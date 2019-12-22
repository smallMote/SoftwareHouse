module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId'
    },
    software_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'softwareId'
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content'
    }
  }, {
    freezeTableName: true,
    tableName: 't_comment'
  })
};
