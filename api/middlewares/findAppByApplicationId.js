const Application = require('../models/Application');

module.exports = function(req, res, next){
    if(req.application) return next();
    const applicationId = req.headers.application;
    // console.log('headers', req.headers.application)
    if(!applicationId) return next();
    Application.findOne({applicationId})
        .then(app => {
            // console.log(app);
            if(!app) return next(new Error('Invalid application'));
            req.application = app;
            req.validRequest = req.application.origins.split(',').find(origin => {
                origin = origin.replace(/\s/g, '');
                console.log('HEADERS',req.headers.origin);
                return origin == req.headers.origin;
            });
            next();
        }).catch(next)
}