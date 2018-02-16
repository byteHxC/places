
const paramsBuilder = require('./helpers').paramsBuilder;
const Application = require('../models/Application');
const validParams = ['origins', 'name'];

function create(req, res){
    let params = paramsBuilder(validParams, req.body);
    Application.create(params)
        .then(application => {
            res.json(application);
        }).catch(error => {
            res.status(422).json({error})
        })
}
function index(req, res){
    
}
function find(req, res, next){
    Application.findById(req.params.id)
        .then(application => {
            req.mainObj = application;
            req.application = application;
            next()
        }).catch(next);
}

function destroy(req, res){
    req.application.remove()
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