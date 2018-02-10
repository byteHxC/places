// PLACES_CONTROLLER

// models
const Place = require('../models/Place');
const upload = require('../config/upload');
const Uploader = require('../models/Uploader');

// helpers
const helpers = require('./helpers');

// CONSTANTES
const validParams = 
    ['title', 'description', 'address', 'acceptsCreditCard', 'openHour', 'closeHour'];
function find(req, res, next){
    Place.findOne({ slug: req.params.id })
        .then(place => {
            req.place = place;
            next();
        }).catch(err => {
            console.log(err);
            next(err);
        })
}
function index(req, res){
    // Todos los lugares
    Place.paginate({}, { page: req.query.page || 1, limit: 5, sort: { '_id': -1 } })
        .then(docs => {
            res.json(docs);
        }).catch(err => {
            console.error(err);
            res.json(err);
        })
}

function show(req, res){
    // Busqueda individual
    res.json(req.place);
}

function create(req, res, next){
    // Crear lugar
    const params = helpers.paramsBuilder(validParams, req.body);
    Place.create(params)
    .then(doc => {
        req.place = doc;
        next();
    }).catch(err => {
        console.error(err);
        next(err);
    })
}
function update(req, res){
    // Actualizar lugar
    const params = helpers.paramsBuilder(validParams, req.body);
    req.place = Object.assign(req.place, params);
    req.place.save()
        .then(doc => {
            res.json(doc);
        }).catch(err => {
            console.log(err);
            res.json(err)
        });
}
function destroy(req, res){
    // Eliminar lugar
    req.place.remove()
        .then( doc => {
            res.json({})
        }).catch( err => {
            console.log(err);
            res.json(err);
        })
}

function multerMiddleware(){
    return upload.fields([
        { name: 'avatar', maxCount: 1},
        { name: 'cover', maxCount: 1}
    ]);
}

function saveImage(req, res){
    console.log('FILES', req.files)
    if(req.place){
        const files = ['avatar', 'cover'];
        const promises = [];
        files.forEach(imageType => {
            if(req.files && req.files[imageType]){
                const path = req.files[imageType][0].path;
                promises.push(req.place.updateImage(path, imageType));
            }
        });
        
        Promise.all(promises)
            .then(results => {
                console.log(results);
                res.json(req.place);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    }else{
        res.status(422).json({
            error: req.error || 'Cloud not save place'
        })
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy,
    find,
    multerMiddleware,
    saveImage
}