module.exports = (sequelize, DataTypes) => {
  return sequelize.define('t_shop', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'shopId'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    seo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'seo'
    },
    cover_img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'coverImgUrl'
    },
    bg_img_url: { // 详情 bg
      type: DataTypes.STRING,
      allowNull: true,
      default: 'default bg-img-url',
      field: 'bgImgUrl'
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'desc'
    },
    download: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
      field: 'download'
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
      field: 'like'
    }
  }, {
    freezeTableName: true
  })
}
