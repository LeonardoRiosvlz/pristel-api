const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: 0,
   // timezone: '-04:00',
    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.books = require("./book.model.js")(sequelize, Sequelize, DataTypes);
db.cargo = require("./cargo.model.js")(sequelize, Sequelize, DataTypes);
db.tercero = require("./tercero.model.js")(sequelize, Sequelize, DataTypes);
db.entidad = require("./entidad.model.js")(sequelize, Sequelize, DataTypes);
db.cajero_ath = require("./cajero_ath.model.js")(sequelize, Sequelize, DataTypes);
db.album = require("./album.model.js")(sequelize, Sequelize, DataTypes);
db.formato = require("./formato.model.js")(sequelize, Sequelize, DataTypes);
db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.permisoCoordinador = require("./permisoCoordinador.model.js")(sequelize, Sequelize, DataTypes);
db.permisosAdmin = require("./permisosAdmin.model.js")(sequelize, Sequelize, DataTypes);
db.permisosAnalista = require("./permisosAnalista.model.js")(sequelize, Sequelize, DataTypes);
db.programacion_ath = require("./programacion_ath.model.js")(sequelize, Sequelize, DataTypes);
db.cierre_ath = require("./cierre_ath.model.js")(sequelize, Sequelize, DataTypes);
db.legalizacionAth = require("./legalizaciones_ath.model.js")(sequelize, Sequelize, DataTypes);
db.area = require("./area.model.js")(sequelize, Sequelize, DataTypes);
db.gestionAth = require("./gestionAth.model.js")(sequelize, Sequelize, DataTypes);
db.notificacion = require("./notificacion.model.js")(sequelize, Sequelize, DataTypes);
db.conversacion = require("./conversacion.model.js")(sequelize, Sequelize, DataTypes);
db.suscripciones = require("./suscripciones.model.js")(sequelize, Sequelize, DataTypes);
db.mensajes = require("./mensajes.model.js")(sequelize, Sequelize, DataTypes);
db.notas = require("./notas.model.js")(sequelize, Sequelize, DataTypes);
db.imputaciones = require("./imputaciones.model.js")(sequelize, Sequelize, DataTypes);
db.abonos = require("./abonos.model.js")(sequelize, Sequelize, DataTypes);
db.regional = require("./regional.model.js")(sequelize, Sequelize, DataTypes); 
db.ciudad = require("./ciudades.model.js")(sequelize, Sequelize, DataTypes); 
db.seguridad = require("./seguridad.model.js")(sequelize, Sequelize, DataTypes); 
db.trazabilidad_ath = require("./trazabilidad_ath.model.js")(sequelize, Sequelize, DataTypes); 
db.sac = require("./sac.model.js")(sequelize, Sequelize, DataTypes);  
db.sacAth = require("./sacAth.model.js")(sequelize, Sequelize, DataTypes);
db.cdcath = require("./cdcath.model.js")(sequelize, Sequelize, DataTypes);
db.fscAth = require("./fscAth.model.js")(sequelize, Sequelize, DataTypes);

db.user.hasMany(db.permisoCoordinador, { foreignKey: 'uid' });
db.permisoCoordinador.belongsTo(db.user, { foreignKey: 'uid' });
db.entidad.hasMany(db.permisoCoordinador, { foreignKey: 'eid' });
db.permisoCoordinador.belongsTo(db.entidad, { foreignKey: 'eid' });

db.user.hasMany(db.permisosAdmin, { foreignKey: 'uid' });
db.permisosAdmin.belongsTo(db.user, { foreignKey: 'uid' });
db.entidad.hasMany(db.permisosAdmin, { foreignKey: 'eid' });
db.permisosAdmin.belongsTo(db.entidad, { foreignKey: 'eid' });

db.user.hasMany(db.permisosAnalista, { foreignKey: 'uid' });
db.permisosAnalista.belongsTo(db.user, { foreignKey: 'uid' });
db.entidad.hasMany(db.permisosAnalista, { foreignKey: 'eid' });
db.permisosAnalista.belongsTo(db.entidad, { foreignKey: 'eid' });
db.regional.hasMany(db.permisosAnalista, { foreignKey: 'rid' });
db.permisosAnalista.belongsTo(db.regional, { foreignKey: 'rid' });
//cajeros//
db.entidad.hasMany(db.cajero_ath, { foreignKey: 'id_entidad' });
db.cajero_ath.belongsTo(db.entidad, { foreignKey: 'id_entidad' });
//imputaciones//
db.user.hasMany(db.album, { foreignKey: 'user_id' });
db.album.belongsTo(db.user, { foreignKey: 'user_id' });
db.entidad.hasMany(db.album, { foreignKey: 'entidad_id' });
db.album.belongsTo(db.entidad, { foreignKey: 'entidad_id' });
db.cajero_ath.hasMany(db.album, { foreignKey: 'cajero_ath_id',onDelete: 'CASCADE' });
db.album.belongsTo(db.cajero_ath, { foreignKey: 'cajero_ath_id',onDelete: 'CASCADE' });
//imputaciones//
db.entidad.hasMany(db.imputaciones, { foreignKey: 'id_entidad' });
db.imputaciones.belongsTo(db.entidad, { foreignKey: 'id_entidad' });
//notas//
db.entidad.hasMany(db.notas, { foreignKey: 'entidad_id' });
db.notas.belongsTo(db.entidad, { foreignKey: 'entidad_id' });
db.user.hasMany(db.notas, { foreignKey: 'user_id' });
db.notas.belongsTo(db.user, { foreignKey: 'user_id' });
//formato de tranferencia// 
db.user.hasMany(db.formato, { as: 'Tecnico', foreignKey: 'tecnico_id' });
db.user.hasMany(db.formato, { as: 'Autorizador', foreignKey: 'autorizador_id' });
db.user.hasMany(db.formato, { as: 'Solicitante', foreignKey: 'solicitante_id' });
db.user.hasMany(db.formato, { as: 'Analista', foreignKey: 'analista_id' });
db.formato.belongsTo(db.user, { as: 'Analista', foreignKey: 'analista_id' });
db.formato.belongsTo(db.user, { as: 'Tecnico', foreignKey: 'tecnico_id' });
db.formato.belongsTo(db.user, { as: 'Autorizador', foreignKey: 'autorizador_id' });
db.formato.belongsTo(db.user, { as: 'Solicitante', foreignKey: 'solicitante_id' }); 
db.tercero.hasMany(db.formato, { foreignKey: 'tercero_id' });
db.formato.belongsTo(db.tercero, { foreignKey: 'tercero_id' });
db.entidad.hasMany(db.formato, { foreignKey: 'entidad_id' });
db.formato.belongsTo(db.entidad, { foreignKey: 'entidad_id' }); 
//formato de tranferencia//

//formato de cobro// 
db.fscAth.hasMany(db.cdcath,{ foreignKey: 'formato_id',onDelete: 'CASCADE' });
db.cdcath.belongsTo(db.fscAth,{ foreignKey: 'formato_id',onDelete: 'CASCADE' });
db.programacion_ath.hasMany(db.cdcath,{ foreignKey: 'id_programacion' }); 
db.cdcath.belongsTo(db.programacion_ath,{ foreignKey: 'id_programacion' });
db.programacion_ath.hasMany(db.formato,{ foreignKey: 'id_programacion',onDelete: 'CASCADE' }); 
db.formato.belongsTo(db.programacion_ath,{ foreignKey: 'id_programacion',onDelete: 'CASCADE' });
db.user.hasMany(db.cdcath,{ foreignKey: 'tecnico_id' });  
db.cdcath.belongsTo(db.user,{ foreignKey: 'tecnico_id' });
db.user.hasMany(db.fscAth, { as: 'Tecnico_athc', foreignKey: 'tecnico_id' });
db.user.hasMany(db.fscAth, { as: 'Autorizador_athc', foreignKey: 'autorizador_id' });
db.user.hasMany(db.fscAth, { as: 'Solicitante_athc', foreignKey: 'solicitante_id' });
db.user.hasMany(db.fscAth, { as: 'Analista_athc', foreignKey: 'analista_id' });
db.fscAth.belongsTo(db.user, { as: 'Analista_athc', foreignKey: 'analista_id' });
db.fscAth.belongsTo(db.user, { as: 'Tecnico_athc', foreignKey: 'tecnico_id' });
db.fscAth.belongsTo(db.user, { as: 'Autorizador_athc', foreignKey: 'autorizador_id' });
db.fscAth.belongsTo(db.user, { as: 'Solicitante_athc', foreignKey: 'solicitante_id' }); 

//formato de cobro//
 
//abono//
db.regional.hasMany(db.cajero_ath, { foreignKey: 'regional_id' });
db.cajero_ath.belongsTo(db.regional, { foreignKey: 'regional_id' }); 
db.regional.hasMany(db.ciudad, { foreignKey: 'regional_id' });
db.ciudad.belongsTo(db.regional, { foreignKey: 'regional_id' });
db.ciudad.hasMany(db.cajero_ath, { foreignKey: 'ciudades_id' });
db.cajero_ath.belongsTo(db.ciudad, { foreignKey: 'ciudades_id' }); 
//abono//
//abono//
db.formato.hasMany(db.abonos, { foreignKey: 'formato_id',onDelete: 'CASCADE' });
db.abonos.belongsTo(db.formato, { foreignKey: 'formato_id',onDelete: 'CASCADE' }); 
//abono//
//trazabilidad//
db.user.hasMany(db.trazabilidad_ath, { foreignKey: 'user_id' });
db.trazabilidad_ath.belongsTo(db.user, { foreignKey: 'user_id' });
//trazabilidad//
//programacion//
db.programacion_ath.hasMany(db.cierre_ath, { foreignKey: 'programacion_id' });
db.cierre_ath.belongsTo(db.programacion_ath, { foreignKey: 'programacion_id' }); 
db.cajero_ath.hasMany(db.programacion_ath, { foreignKey: 'id_cajero',onDelete: 'CASCADE'  });
db.programacion_ath.belongsTo(db.cajero_ath, { foreignKey: 'id_cajero' ,onDelete: 'CASCADE'});
db.cajero_ath.hasMany(db.trazabilidad_ath, { foreignKey: 'id_cajero' ,onDelete: 'CASCADE' });
db.trazabilidad_ath.belongsTo(db.cajero_ath, { foreignKey: 'id_cajero' ,onDelete: 'CASCADE'});
db.user.hasMany(db.programacion_ath, { as: 'Tecnico_ath', foreignKey: 'tecnico_id' });
db.user.hasMany(db.programacion_ath, { as: 'Coordinador', foreignKey: 'coordinador_id' });
db.user.hasMany(db.programacion_ath, { as: 'Analista_ath', foreignKey: 'analista_id' });
db.programacion_ath.belongsTo(db.user, { as: 'Analista_ath', foreignKey: 'analista_id' });
db.programacion_ath.belongsTo(db.user, { as: 'Tecnico_ath', foreignKey: 'tecnico_id' });
db.programacion_ath.belongsTo(db.user, { as: 'Coordinador', foreignKey: 'coordinador_id' });


db.programacion_ath.hasMany(db.gestionAth, { foreignKey: 'id_programacion' }); 
db.gestionAth.belongsTo(db.programacion_ath, { foreignKey: 'id_programacion' }); 
db.programacion_ath.hasMany(db.legalizacionAth, { foreignKey: 'id_programacion' }); 
db.legalizacionAth.belongsTo(db.programacion_ath, { foreignKey: 'id_programacion' }); 
db.programacion_ath.hasMany(db.sacAth, { foreignKey: 'id_programacion' }); 
db.sacAth.belongsTo(db.programacion_ath, { foreignKey: 'id_programacion' }); 
//fin programcion //




db.user.hasMany(db.notificacion, { as: 'destinatario', foreignKey: 'uid' });
db.user.hasMany(db.notificacion, { as: 'remitente', foreignKey: 'uidr' });
db.notificacion.belongsTo(db.user, { as: 'remitente', foreignKey: 'uidr' });
db.notificacion.belongsTo(db.user, { as: 'destinatario', foreignKey: 'uid' });



///chat///
db.conversacion.hasMany(db.suscripciones, { foreignKey: 'id_conversacion' }); 
db.user.hasMany(db.conversacion, { foreignKey: 'uid' }); 
db.suscripciones.belongsTo(db.conversacion, { foreignKey: 'id_conversacion' }); 
db.user.hasMany(db.suscripciones, { foreignKey: 'uid' }); 
db.suscripciones.belongsTo(db.user, { foreignKey: 'uid' }); 

db.conversacion.hasMany(db.mensajes, { foreignKey: 'id_conversacion' }); 
db.conversacion.belongsTo(db.user, { foreignKey: 'uid' }); 
db.user.hasMany(db.mensajes, { foreignKey: 'uid' });
db.mensajes.belongsTo(db.user, { foreignKey: 'uid' }); 
db.mensajes.belongsTo(db.conversacion, { foreignKey: 'id_conversacion' }); 
///chat///




db.ROLES = ["user", "moderator", "admin"];

module.exports = db;
