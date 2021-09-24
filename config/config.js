module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  server:{
   // SERVER:"https://pristelapp.herokuapp.com/public/"
  SERVER:"https://176.223.143.24:3000/public/"
  },
  /** DATABASE 
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
 */
  /** DATABASE */
  db: { 
    DB_HOST: "176.223.143.24",
    DB_USER: "adminpristel_adminuser",
    DB_PASS: "bios2020**",
    DB_NAME: "adminpristel_base",
    dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
 },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};
