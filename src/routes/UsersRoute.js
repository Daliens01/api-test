const express = require("express");
const router = express.Router();
const schema = require("../Models/Users")
 
//agregar
router.post(("/Users"), async(req, res)=>{
    const saved = schema(req.body);
    await saved.save()
      .then((data) => res.json(data))
      .catch((err) => res.json({message : err}));
})
//ver
router.get(("/Users"), async(req, res) =>{
    await schema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//ver por id
router.get(("/Users/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//actualizar
router.put(("/Users/:id"), async(req, res) =>{
    const {id} = req.params;
    const {name,lastname, email,password, userStatus} = req.body;
    await schema.updateOne({_id: id},{ $set: {name,lastname, email,password, userStatus}})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})
//eliminar
router.delete(("/Users/:id"), async(req, res) =>{
    const {id} = req.params;
    await schema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json({message : err}));
})

module.exports = router