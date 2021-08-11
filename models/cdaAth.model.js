module.exports = (sequelize, Sequelize, DataTypes) => {
    const CDAATH = sequelize.define(
      "cdaath", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        precio_tecnico: {
            type: DataTypes.STRING(25)
        },
        ajuste: {
            type: DataTypes.STRING(25)
        },
        observaciones: {
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
  
    return CDAATH;
  };
  