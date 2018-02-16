
const paramsBuilder = require('./helpers').paramsBuilder;
const FavoritePlace = require('../models/FavoritePlace');
const User = require('../models/User');
const validParams = ['_place'];

function create(req, res){
    let params = paramsBuilder(validParams, req.body);
    params['_user'] = req.user.id;
    FavoritePlace.create(params)
        .then(favorite => {
            res.json(favorite);
        }).catch(error => {
            res.status(422).json({error})
        })
}
function index(req, res){
    User.findOne({'_id': req.user.id})
        .then(user => {
            console.log(user.places);
            user.favorites
                .then(places => {
                    res.json(places);
                })
            
        })
}
function find(req, res, next){
    FavoritePlace.findById(req.params.id)
        .then(fav => {
            req.mainObj = fav;
            req.favorite = fav;
            next()
        }).catch(next);
}

function destroy(req, res){
    req.favorite.remove()
        .then(doc => {
            res.json({})
        }).catch(error => {
            res.status(500).json({error})
        })
}

module.exports = {
    create, 
    find,
    destroy,
    index
}