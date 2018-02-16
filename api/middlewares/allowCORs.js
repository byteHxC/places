

module.exports = function(options){
    
    let CORs = function(req, res, next){
        if(req.application){
            req.application.origins.split(',').forEach(origin => {
                res.header('Access-Control-Allow-Origin', origin);
            })
        }else{
            res.header('Access-Control-Allow-Origin', '*');
        }
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Application');
        next();
    }
    CORs.unless = require('express-unless');
    
    return CORs;
}