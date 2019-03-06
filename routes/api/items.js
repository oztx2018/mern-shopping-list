const express = require('express');
const router= express.Router();


// Item model

const Item = require('../../models/item');


// @route GET api/items
//@desc Get items
// @access public 

router.get('/', (req,res) => {
   Item.find()
   .sort({date: -1})
   .then(items => res.json(items))
});

// @route POST api/items
//@desc   Create A Item
// @access public 

router.post('/', (req,res) => {
    const newItem =  new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item)); 
 });

//@route delete api/items:id
//@desc   delete A Item
//@access public 

router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
 });

module.exports = router; 

