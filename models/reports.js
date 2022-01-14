'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reports extends Model {

    static associate({ Users }) {
      this.belongsTo(Users, {
        foreignKey: 'userId', 
        as: 'user' 
      })
    }
  };
  Reports.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    dataReport: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Report must have data' },
        notEmpty: { msg: "Report can't be empty" }
      }
    }
  }, {
    sequelize,
    tableName: 'reports',
    modelName: 'Reports',
  });
  return Reports;
};