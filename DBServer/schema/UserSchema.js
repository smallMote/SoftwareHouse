module.exports = (sequlize, DataTypes) => {
  return sequlize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    salt: { // 用户密码盐
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cover_img_url: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'coverImgUrl'
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    }
  }, {
    freezeTableName: true,
    tableName: 't_user'
  })
};
