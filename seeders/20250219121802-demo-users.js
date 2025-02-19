const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];

    for (let i = 0; i < 10; i++) {
      users.push({
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        repoCount: faker.number.int({ min: 1, max: 100 }),
        location: faker.location.city(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
