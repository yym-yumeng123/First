'use strict';
const bcrypt = require("bcryptjs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Users", [
      {
        email: "admin@163.com",
        username: "admin",
        password: bcrypt.hashSync("123456", 10),
        nickname: "管理员",
        sex: 1,
        company: "公司",
        introduce: "介绍",
        role: 100,
        avatar: "avatar.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin1@163.com",
        username: "admin1",
        password: bcrypt.hashSync("123456", 10),
        nickname: "管理员1",
        sex: 1,
        company: "公司1",
        introduce: "介绍1",
        role: 100,
        avatar: "avatar.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
