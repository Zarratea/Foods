const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createInDb:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true,
    },
  });
};
