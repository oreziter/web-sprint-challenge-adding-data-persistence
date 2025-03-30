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

// router.post("/", async (req, res, next) => {


// });

module.exports = router;
