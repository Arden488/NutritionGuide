module.exports = function() {
  return {
    recipes: require('./data/recipes.json'),
    ingredients: require('./data/ingredients.json'),
    week: require('./data/week.json')
  }
}