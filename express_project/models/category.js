'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Category.hasMany(models.Course)
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "分类名称不能重复",
      },
      validate: {
        notNull: {
          msg: "分类名称不能为空",
        },
        notEmpty: {
          msg: "分类名称不能为空",
        },
        len: {
          args: [1, 100],
          msg: "分类名称长度必须在1-100个字符之间",
        },
      },
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "分类排序不能为空",
        },
        notEmpty: {
          msg: "分类排序不能为空",
        },
        isInt: {
          msg: "分类排序必须是整数",
        },
        isPositive(value) {
          if (value <= 0) {
            throw new Error("分类排序必须是正整数");
          }
        },
        
      },
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};