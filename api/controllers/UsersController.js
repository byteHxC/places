const User = require('../models/User');
const paramsBuilder = require('./helpers').paramsBuilder;

const validParams = ['email', 'name', 'password'];

function create(req, res, next){
    let params = paramsBuilder(validParams, req.body);
    User.create(params)
        .then(user => {
            req.user = user
            next();
            // res.json(user);
        }).catch(error => {
            console.log(error);
            next(error);
            // res.status(422).json({ error})  
        })
}

function destroyAll(req, res){
    User.remove({}).then(r => res.json());
}

module.exports = {
    create,
    destroyAll
}