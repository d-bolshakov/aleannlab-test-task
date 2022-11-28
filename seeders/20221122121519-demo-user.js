'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: "Natalia Waller",
      rank: 3
    },
    {
      username: "Terence Wolf",
      rank: 1
    },
    {
      username: "Lexi-Mae Milne",
      rank: 2
     },
     {
      username: "Vihaan Noel",
      rank: 5
     },
     {
      username: "Gurveer Gonzalez",
      rank: 4
     },
     {
      username: "Kelsi Field",
      rank: 6
     },
     {
      username: "Janine Schultz",
      rank: 8
     },
     {
      username: "Hussein Nielsen",
      rank: 7
     },
     {
      username: "Cohen Wynn",
      rank: 10
     },
     {
      username: "Bethany Montoya",
      rank: 9
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
