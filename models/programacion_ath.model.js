module.exports = (sequelize, Sequelize, DataTypes) => {
    const ProgramacionAth = sequelize.define(
      "programacion_ath", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        consecutivo: {
           type: DataTypes.STRING(15),
           unique: true
        },
        titulo: {
          type: DataTypes.STRING(45),
        },
        codigo_tecnico: {
            type: DataTypes.STRING(15)
        },
        codigo_cajero: {
            type: DataTypes.STRING(15)
        },
        tipo_llamada: {
          type: DataTypes.STRING(15) 
        },
        llamada: {
            type: DataTypes.STRING(15)
        },
        tipo_servicio: {
          type: DataTypes.STRING(100)
        },
        prioridad: {
          type: DataTypes.STRING(40)
        },
        margen: {
          type: DataTypes.STRING(52)
        },
        estado_pago: {
          type: DataTypes.ENUM('No aplica','Pendiente','Listado',),
          unique: false
        },
        motivo_escalado: {
          type: DataTypes.TEXT('long')
          
        },
        motivo_rechazo: {
          type: DataTypes.TEXT('long')
          
        },   
        motivo_archivado: {
          type: DataTypes.TEXT('long')
        },   
        motivo_cierre: {
          type: DataTypes.TEXT('long') 
        },  
        fecha_creacion: {
          allowNull: true,
          type: DataTypes.DATE
        },
        requiere_cita: {
            type: DataTypes.ENUM('Si','No'),
            unique: false
        },
        status: {
            type: DataTypes.ENUM('Creada','Programada','Archivada','Reprogramada','Escalada','Suspendida','Devuelta','Aceptada','Rechazada','Legalizada','Cumplida','En proceso','Vencida','Cerrada'),
            defaultValue: 'Creada',
            unique: false
        }, 
        aplica_sac: {
          type: DataTypes.ENUM('','Aplica','No aplica'),
          unique: false
        },
        aplica_escalado: {
          type: DataTypes.ENUM('','Aplica','No aplica'),
          unique: false
        },
        total_tecnico: {
          type: DataTypes.STRING(20)
        },
        valoracion: {
          type: DataTypes.INTEGER(5)
        },
        fecha_vencimiento: {
            allowNull: true,
            type: DataTypes.DATE
        },
        fecha_cierre: {
          allowNull: true,
          type: DataTypes.DATE
        },
        vencimiento_tecnico: {
          allowNull: true,
          type: DataTypes.DATE
        },
        descripcion: {
            type: DataTypes.TEXT('long')
        },
        observacion_cierre: {
          type: DataTypes.TEXT('long')
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }  
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return ProgramacionAth;
  };
  