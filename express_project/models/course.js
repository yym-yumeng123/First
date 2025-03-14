"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Course.belongsTo(models.Category, {
        as: "category",
      })
      models.Course.belongsTo(models.User, {
        as: "user",
      })
      models.Course.hasMany(models.Chapter, {
        as: "chapters",
      })
    }
  }
  Course.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "分类不能为空",
          },
          notEmpty: {
            msg: "分类不能为空",
          },
          async isPresent(value) {
            const category = await sequelize.models.Category.findByPk(value)
            if (!category) {
              throw new Error(`ID为${value}的分类不存在`)
            }
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "用户不能为空",
          },
          notEmpty: {
            msg: "用户不能为空",
          },
          async isPresent(value) {
            const user = await sequelize.models.User.findByPk(value)
            if (!user) {
              throw new Error(`ID为${value}的用户不存在`)
            }
          },
        },
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      recommended: DataTypes.BOOLEAN,
      introductory: DataTypes.BOOLEAN,
      content: DataTypes.TEXT,
      likesCount: DataTypes.INTEGER,
      chaptersCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
    }
  )
  return Course
}
