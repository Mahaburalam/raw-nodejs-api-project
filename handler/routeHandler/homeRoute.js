/**
 * 
 * 
 * 
 */

const appRoute = {};

appRoute.homeRoute = (requestProperties, callback) => {
    // console.log(``);
    callback(200, {
        message:"This is website home page"
    })
}

module.exports = appRoute;