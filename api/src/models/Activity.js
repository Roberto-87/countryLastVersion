const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duracion: {
      type: DataTypes.TIME,
    },
    temporada: {
      type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"]),
      allowNull: false,
    },
  });
};
