
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {title: 'boil', step_number: 1, instructions: "bring water to boil.", recipes_id: 1},
        {title: 'cook', step_number: 2, instructions: "cook hotdogs in water for 10 mins.", recipes_id: 1},
        {title: 'serve', step_number: 3, instructions: "plate hotdogs and serve to your high class dinners.", recipes_id: 1},
        {title: 'water', step_number: 1, instructions: "aquire water", recipes_id: 2},
        {title: 'freeze', step_number: 2, instructions: "place water into freezer and let set for an hour.", recipes_id: 2},
        {title: 'serve', step_number: 3, instructions: "serve you dish in a bowl and not a plate.", recipes_id: 2},
        {title: 'prep', step_number: 1, instructions: "gather your eggs and ham, cut it all up in to tiny bite size parts.", recipes_id: 3},
        {title: 'cook', step_number: 2, instructions: "place in skilet and add milk (1 cup), cook for about half an hour on med", recipes_id: 3},
        {title: 'serve', step_number: 3, instructions: "plate and let cook before serving.", recipes_id: 3},
      ]);
    });
};
