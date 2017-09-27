var restful = require('node-restful');
module.exports = function(app, route) {
    var rest = restful.model('stock', app.models.stock).methods(['get']);
    rest.register(app, route);
    return function(req, res, next) { next(); };
}