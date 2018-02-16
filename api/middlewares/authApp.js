const Application = require('../models/Application');
const expressUnless = require('express-unless');

module.exports = function(options){

    let AuthApp = function(req, res, next){
        Application.count({}).then(appCount => {
            if(appCount > 0 && !req.application) {
                console.log('error app is required');
                return next(new Error('An application is required to consume this API'));
            }
            if(!req.validRequest) return next(new Error('Origin invalid'));
            req.validApp = true;
            next();
        }).catch(error => {
            console.log(error)
            next(error)
        })
    }
    AuthApp.unless = require('express-unless');

    return AuthApp;
   
}