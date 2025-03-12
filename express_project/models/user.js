'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    sex: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "性别不能为空",
        },
        notNull: {
          msg: "性别不能为空",
        },
        isIn: [[0, 1, 2]],
      },
    },
    company: DataTypes.STRING,
    introduce: DataTypes.TEXT,
    role: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "角色不能为空",
        },
        notNull: {
          msg: "角色不能为空",
        },
        isIn: {
          args: [[0, 100]],
          msg: "角色值必须是0, 100",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};