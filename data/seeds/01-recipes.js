
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'super secret hotdogs'},
        {name: 'i forgot the title'},
        {name: 'eggs on ham'}
      ]);
    });
};
