const mongoose = require('mongoose');
const database = 'places_facilito_api'
module.exports = {
    connect: () => mongoose.connect('mongodb://localhost/'+database),
    database,
    connection: () => {
        if(mongoose.connection)
            return mongoose.connection;
        return this.connect();
    }
}