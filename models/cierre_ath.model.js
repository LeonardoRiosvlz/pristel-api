module.exports = (sequelize, Sequelize, DataTypes) => {
    const CierreAth = sequelize.define(
      "cierre_ath", // Model name
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
        codigo_cajero: {
            type: DataTypes.STRING(15)
        },
        tipo_llamada: {
            type: DataTypes.STRING(15) 
        },
        llamada: {
            type: DataTypes.STRING(15) 
        },
        descripcion: {
            type: DataTypes.TEXT('long')
        },
        actividades_ejecutadas: {
            type: DataTypes.TEXT('long')
        },
        titulo: {
            type: DataTypes.TEXT('long')
        },
        terminal: {
          type: DataTypes.STRING(240)
        },
        total_sac: {
            type: DataTypes.STRING(20)
        },
        sac: {
            type: DataTypes.JSON
        },
        antes: {
            type: DataTypes.JSON
        },
        despues: {
            type: DataTypes.JSON
        },
        entidad_bancaria: {
            type: DataTypes.STRING(60)
        },
        fecha_despacho: {
            type: DataTypes.DATE
        },
        fecha_atencion: {
            type: DataTypes.DATE
        },
        ciudad_origen: {
            type: DataTypes.STRING(60)
        },
        ciudad_destino: {
            type: DataTypes.STRING(60)
        },
        departamento: {
            type: DataTypes.STRING(60)
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
  
    return CierreAth;
  };
  