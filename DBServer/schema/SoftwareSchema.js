module.exports = (sequelize, DataTypes) => {
  return sequelize.define('software', {
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
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'desc'
    },
    wangpan_url: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'wangpanUrl'
    },
    wangpan_pwd: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'wangpanPwd'
    },
    download_link: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'downloadLink'
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
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'shopId'
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'commentId'
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'contentId'
    }
  }, {
    freezeTableName: true,
    tableName: 't_software',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })
};

