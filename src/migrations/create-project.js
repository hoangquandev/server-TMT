"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Projects", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      imageId: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      client: {
        type: Sequelize.STRING,
      },
      design: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      lotArea: {
        type: Sequelize.STRING,
      },
      constructionArea: {
        type: Sequelize.STRING,
      },
      publicArea: {
        type: Sequelize.STRING,
      },
      stories: {
        type: Sequelize.STRING,
      },
      style: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Projects");
  },
};
