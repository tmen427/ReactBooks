const axios = require("axios");
const router = require("express").Router();

router.get("/zz", (req, res) => {          //it has to go to route /recipes, why?   //router goes to one route, but axios api.js slighty goes to a different route. but the tail end /zz is the same!s
  axios
 
    .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
    .then(({ data: { items } }) => console.log("does it work dude? " + res.json(items))        //check your bash
  
    
    )
    .catch(err => res.status(422).json(err));
});

module.exports = router;
