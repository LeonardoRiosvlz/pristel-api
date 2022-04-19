module.exports = (sequelize, Sequelize, DataTypes) => {
    const PrioridadesAth = sequelize.define(
      "prioridadesAth", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        critico: {
            type: DataTypes.INTEGER
        },
        alto : {
            type: DataTypes.INTEGER
        },
        medio: {
            type: DataTypes.INTEGER
        },
        bajo: {
            type: DataTypes.INTEGER
        },
        rol: {
          type: DataTypes.ENUM('Administrador','Analista','Coordinador','Tecnico'),
          defaultValue: 'Administrador',
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
  
    return PrioridadesAth;
  };
  