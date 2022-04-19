module.exports = (sequelize, Sequelize, DataTypes) => {
    const ServicioAth = sequelize.define(
      "servicioAth", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: {
          type: DataTypes.STRING
        },
        prioridad: {
            type: DataTypes.ENUM('INMEDIATA','CRITICO','ALTO','MEDIO','BAJO'),
            defaultValue: 'BAJO',
            unique: false
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
  
    return ServicioAth;
  };
  