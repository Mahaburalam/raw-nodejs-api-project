/**
 * 
 * 
 * 
 */

const appRoute = {};

appRoute.fileNotFound = (requestProperties, callback) => {
    // console.log(requestProperties);
    callback(500, {
        message:"File or path not found"
    });
};

module.exports = appRoute;