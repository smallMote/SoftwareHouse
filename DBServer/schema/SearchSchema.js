// 搜索存储 包含历史搜索，热门推荐

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('t_software', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    history: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'history'
    }
  })
};
