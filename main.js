const IngredientStorage = require('./IngredientStorage')
const recipe_list = require('./src/recipe_list')
const ingredients = require('./src/ingredients')


const main = () => {
  const storage = new IngredientStorage(ingredients)
  console.log("You can cook some foods")
  var i = 0;
  var total_recipe = recipe_list.length

  recipe_list.forEach(recipe => {
    const prep_ingredients = recipe.ingredients
    const check_ingredient = storage.check_ingredients(prep_ingredients)
    
    if(check_ingredient){
      storage.remove_ingredients(prep_ingredients)
      recipe.cook(recipe.name, prep_ingredients)
      i++
    }

  })

  console.log(`total: ${i}/${total_recipe}`)
}

// Nhưng em chưa biết làm sao để  áp dụng greedy Algorithm

main()