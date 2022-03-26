const IngredientStorage = require('./IngredientStorage')
const {validate_ingredients} = require('./utils')

const ingredients =  [
  {name: 'egg', amount: 10, unit: 'number'},
  {name: 'tomato', amount: 500, unit: 'gram'},
  {name: 'green onion', amount: 400, unit: 'gram'},
  {name: 'carrot', amount: 500, unit: 'gram'},
  {name: 'milk', amount: 1000, unit: 'milliliter'},
  {name: "green bean", amount: 500, unit: 'gram'}
]

const main = () => {
  const storage = new IngredientStorage(ingredients)

  const items = [
    {name: 'egg', amount: -5, unit: 'number'},
    {name: 'tomato', amount: 500, unit: 'gram'},
    {name: 'green onion', amount: 400, unit: 'gram'},
    {name: "green bean", amount: 500, unit: 'gram'},
    // {name: 'carrot', amount: 500, unit: 'gram'},
    // {name: 'milk', amount: 1000, unit: 'milliliter'},
    // {name: "green bean", amount: 500, unit: 'gram'}
  ]

  //storage.add_ingredients(items)
  //console.log(storage.get_ingredients())

  // const check_ingredients = storage.check_ingredients(items)
  // console.log({check_ingredients})

  storage.remove_ingredients(items)
  console.log(storage.get_ingredients())
  

}

main()