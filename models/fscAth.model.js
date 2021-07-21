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
          type: DataTypes.ENUM('Creado','Pendiente','Aprobado','Rechazado'),
          defaultValue: 'Creado',
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
            type: DataTypes.TEXT('long')
        },
        fecha_pagado: {
          allowNull: true,
          type: DataTypes.DATEONLY
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
  