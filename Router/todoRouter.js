const express = require('express');
const router = express.Router();
const todoSchema = require('../Schema/TodoSchema')

router.post('/', async (req,res) => {
    try{
        const data = await new todoSchema({
            data: req.body.data,
        })
        const saveTodo = await data.save();
        res.json(saveTodo)
    }catch(err){
        res.json(err)
    }
})

router.get('/', async (req,res) => {
    try{
        const getData = await todoSchema.find();
        res.json(getData)
    }catch(err){
        res.json(err)
    }
})

router.put('/', async (req,res) => {
    try{    
        const update = await todoSchema.updateOne({_id: req.body._id},{$set: {
            data: req.body.data,
        }})
        res.json(update)
    }catch(err){
        res.json(err)
    }
})

router.delete('/:id', async (req,res) => {
    const deleteItem = await todoSchema.findByIdAndRemove(req.params.id).then((e) => {
        res.json({message: 'Deleted Successfully'})
    })
})

module.exports = router;