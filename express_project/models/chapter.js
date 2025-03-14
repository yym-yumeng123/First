'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Chapter.belongsTo(models.Course, {
        foreignKey: "courseId",
        targetKey: "id",
      })
    }
  }
  Chapter.init({
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "课程ID不能为空",
        },
        notNull: {
          msg: "课程ID不能为空",
        },
        async isPresent(value) {
          const course = await sequelize.models.Course.findByPk(value);
          if (!course) {
            throw new Error("课程不存在");
          }
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "标题不能为空",
        },
        notNull: {
          msg: "标题不能为空",
        },
        len: {
          args: [1, 100],
          msg: "标题长度必须在1到100个字符之间",
        },
      },
    },
    content: DataTypes.TEXT,
    video: DataTypes.STRING,
    rank: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chapter',
  });
  return Chapter;
};