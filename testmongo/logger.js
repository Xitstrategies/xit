"use strict";
// logger middleware

module.exports = function logging(req, res, next) {
    var start = +new Date();
    var stream = process.stdout;
    const {url,method} = req;

    res.on('finish', function(){
        // var duration = +new Date() - start;
        const message = `${method} to ${url} took ${+new Date() - start} ms\n`;
        stream.write(message);
    });

    next();
}
