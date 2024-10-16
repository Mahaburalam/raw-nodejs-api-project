/**
 * set up all environment related task
 * 
 */

// scaffolding
const env = {};

env.staging = {
    port: 3000,
    envName:"Staging"
};

env.production = {
    port: 4000,
    envName: "Live or production"
};

// which environment is passed through when program is running
const currentEnvironment = typeof(process.env.ENV_NAME === "string")? process.env.ENV_NAME : "Staging";

// export corresponding object data
const exportEnvironment = typeof(env[currentEnvironment] === "Object")? env[currentEnvironment] : env.staging ;

// module.exports = exportEnvironment;
module.exports = env;

