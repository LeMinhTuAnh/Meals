const ingredients = require("./ingredients")

module.exports = [
  {
    name: 'fried egg',
    ingredients: [
      { name: 'egg', amount: 3, unit: 'number' },
      { name: 'green onion', amount: 100, unit: 'gram' },
      { name: 'milk', amount: 200, unit: "milliliter" }
    ],
    // @override
    cook: (name, ingredients) => { console.log(`${name}:`, ingredients) }
  },
  {
    name: 'egg soup',
    ingredients: [
      { name: 'egg', amount: 4, unit: 'number' },
      { name: 'green onion', amount: 30, unit: 'gram' },
      { name: 'tomato', amount: 200, unit: 'gram' }
    ],
     // @override
    cook: (name, ingredients) => { console.log(`${name}:`, ingredients) }
  },
  {
    name: 'fried tofu',
    ingredients: [
      { name: 'tofu', amount: 2, unit: 'piece' },
      { name: 'green onion', amount: 50, unit: 'gram' }
    ],
     // @override
    cook: (name, ingredients) => { console.log(`${name}:`, ingredients) }
  },
  {
    name: 'tomato fried tofu',
    ingredients: [
      { name: 'tofu', amount: 3, unit: 'piece' },
      { name: 'tomato', amount: 300, unit: 'gram' },
      { name: 'green onion', amount: 40, unit: 'gram' }
    ],
     // @override
    cook: (name, ingredients) => { console.log(`${name}:`, ingredients) }
  },
  {
    name: 'stir fried vegetables',
    ingredients: [
      { name: 'tofu', amount: 4, unit: 'piece' },
      { name: 'green bean', amount: 200, unit: 'gram' },
      { name: "carrot", amount: 200, unit: 'gram' },
      { name: 'green onion', amount: 20, unit: 'gram' }
    ],
     // @override
    cook: (name, ingredients) => { console.log(`${name}:`, ingredients) }
  },
  {
    name: 'fried rolls',
    ingredients: [
      { name: 'green onion', amount: 50, unit: 'gram' },
      { name: "onion", amount: 200, unit: 'gram' },
      { name: "meat", amount: 500, unit: 'gram' },
      { name: 'agg', amount: 3, unit: 'number' },
      { name: 'carrot', amount: 100, unit: 'gram' }
    ],
    // @override
    cook: (name, ingredients) => { console.log(`${name}:`, ingredients) }
  },
  
]