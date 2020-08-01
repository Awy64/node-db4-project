const router = require('express').Router();

const db = require('./recipes-model')

router.get('/', async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes)
  } 
  catch {
    res.status(500).json({message: "unable to retreve recipes at this time."})
  }
  
  
})

router.get('/:id/ShoppingList', async (req, res) => {
  const {id} = req.params
  try {
    const shoppingList = await db.getShoppingList(id)
    res.json(shoppingList)
  } 
  catch{
    res.status(500).json({message: "unable to retreve ingredients at this time."})
  }
})

router.get('/:id/instructions', async (req, res) => {
  const {id} = req.params
  try{
    const instructions = await db.getInstructions(id)
    res.json(instructions)
  } catch{
    res.status(500).json({message: "unable to retreve instructions at this time."})
  }
})


module.exports = router