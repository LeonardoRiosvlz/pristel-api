module.exports = (sequelize, Sequelize, DataTypes) => {
    const ASCATH = sequelize.define(
      "ascath", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        }, 
        valor_abono: {
          type: DataTypes.STRING(25)
        },
        tipo: {
            type: DataTypes.ENUM('Efectivo','Transferencia','Giro','Nequi'),
        },
        descripcion_abono: {
          type: DataTypes.STRING
        },
        archivo_abono: {
            type: DataTypes.STRING
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
  
    return ASCATH;
  };
  