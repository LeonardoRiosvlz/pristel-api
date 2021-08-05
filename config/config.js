module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  server:{
   // SERVER:"https://pristelapp.herokuapp.com/public/"
  SERVER:"http://localhost:5000/public/"
  },
 // /** DATABASE */
  db: {
    DB_HOST: "brcsvl5ao6prwpeq0sp3-mysql.services.clever-cloud.com",
    DB_USER: "uar1r4tflbjyzvk6",
    DB_PASS: "OrMOiL7aWrozUEW0ZHR3",
    DB_NAME: "brcsvl5ao6prwpeq0sp3",
    dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }, 
 
  /** DATABASE */
//  db: {
//    DB_HOST: "localhost",
//    DB_USER: "root",
//    DB_PASS: "",
//    DB_NAME: "pristeldb",
//    dialect: "mysql",

//    // pool is optional, it will be used for Sequelize connection pool configuration
//    pool: {
   //   max: 5,
 //     min: 0,
//      acquire: 30000,
//      idle: 10000
//    }
// },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};
