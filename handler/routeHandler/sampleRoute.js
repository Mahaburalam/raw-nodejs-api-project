/**
 * 
 * 
 */

// module scaffolding
const appRoute = {};

appRoute.sampleAppRoute = (requestProperties, callback) => {
    // console.log(requestProperties);
    callback(200, {
        message:"This is sample or testing route page"
    });
};

module.exports = appRoute;