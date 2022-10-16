const express = require('express');
const router = express.Router();
const Cinema = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get ("/movies", (req, res, next) => {
    Cinema.find()
    .then((moviesList) => {
     res.render("movies.hbs", {
        moviesList
     })
})
.catch((err) => {
    next(err);
})
})


router.get("/movies/:moviedetails", (req, res, next) => {
    const { moviedetails } = req.params;
    Cinema.findById(moviedetails)
    //console.log(moviedetails)
    .then((response) => {  
        console.log(response)
        res.render("movie-details.hbs", {
            movieDetails: response
        })
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router;
