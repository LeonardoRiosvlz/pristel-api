module.exports = (sequelize, Sequelize, DataTypes) => {
    const FSCATH = sequelize.define(
      "fscath", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        status: {
          type: DataTypes.ENUM('Pendiente','Aprobado','Rechazado'),
          defaultValue: 'Pendiente',
          unique: false
       }, 
       status_pago: {
        type: DataTypes.ENUM('','Pendiente','Cancelado'),
        defaultValue: '',
        unique: false
        },
        items: {
          type: DataTypes.JSON
        },
        observacion: {
            type: DataTypes.STRING(255)
        },
        total: {
            type: DataTypes.STRING(15)
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
  
    return FSCATH;
  };
  