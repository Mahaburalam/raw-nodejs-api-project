/**
 * 
 */

// app module - scaffolding 
const {sampleAppRoute} = require('./handler/routeHandler/sampleRoute');
const {homeRoute} = require('./handler/routeHandler/homeRoute');

const routes = {
    sample : sampleAppRoute,
    "":homeRoute,
    homePage : homeRoute

    // sample: sampleAppRoute,
    // ...["", "homePage"].reduce((acc, route) => ({...acc, [route]: homeRoute}), {}),
}

module.exports = routes;