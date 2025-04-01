// build your `/api/resources` router here

const router = require('express').Router()
const Resources = require('./model');

router.get("/", async (req, res, next) => { 
    try {
      const getResources = await Resources.getAllResources();
      res.status(200).json(getResources);
    } catch (err) {
      next(err);
    }
  });

router.post("/", async (req, res, next) => {
try {
    const newResource = await Resources.createResource(req.body)
    res.status(201).json(newResource)
  } catch(err){
    next(err)
  }
  
})

module.exports = router;
