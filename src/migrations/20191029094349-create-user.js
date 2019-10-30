"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM("MALE", "FEMALE"),
        allowNull: false
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      nickName: {
        type: Sequelize.STRING,
        unique: true
      },
      dateOfBirth: Sequelize.DATE,
      bio: {
        type: Sequelize.STRING
      },
      coverPhoto: Sequelize.STRING,
      profilePhoto: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("Users");
  }
};
