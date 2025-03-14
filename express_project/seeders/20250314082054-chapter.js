"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Chapters",
      [
        {
          courseId: 1,
          title: "第一章",
          content: "第一章内容",
          video: "https://www.baidu.com",
          rank: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 2,
          title: "第二章",
          content: "第二章内容",
          video: "https://www.baidu.com",
          rank: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
