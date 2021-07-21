module.exports = (sequelize, Sequelize, DataTypes) => {
    const VisitasAth = sequelize.define(
      "gestion_ath", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        status: {
            type: DataTypes.ENUM('Pendiente','Aceptada','Devuelta'),
            defaultValue: 'Pendiente',
            unique: false
        },
        fecha: {
            allowNull: true,
            type: DataTypes.DATEONLY
        }, 
        asunto: {
            type: DataTypes.TEXT('long')
        },
        descripcion: {
            type: DataTypes.TEXT('long')
        },
        descripcion_larga: {
          type: DataTypes.TEXT('long')
        },
        observaciones_analista: {
            type: DataTypes.TEXT('long') 
        },
        observaciones: {
          type: DataTypes.TEXT('long')
        },
        evidencias_antes: {
            type: DataTypes.JSON
        },
        evidencias_durante: {
            type: DataTypes.JSON
        },
        evidencias_despues: {
            type: DataTypes.JSON
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
  
    return VisitasAth;
  };
  