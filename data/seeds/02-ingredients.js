
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'hotdog'},
        {name: 'water'},
        {name: 'eggs'},
        {name: 'ham'},
        {name: 'ice'},
        {name: 'milk'},
        {name: 'bacon'},
        {name: 'butter'},
        {name: 'salt'},
        {name: 'pepper'}
      ]);
    });
};
