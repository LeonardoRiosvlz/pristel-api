module.exports = (sequelize, Sequelize, DataTypes) => {
  const PermisoCoordinador = sequelize.define(
    "permiso_coordinador", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
  
  
  
  return PermisoCoordinador; 
};
