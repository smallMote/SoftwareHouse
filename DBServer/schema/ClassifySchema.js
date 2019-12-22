module.exports = (sequelize, DataTypes) => {
  return sequelize.define('t_classify', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    }
  }, { freezeTableName: true })
}
