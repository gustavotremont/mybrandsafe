'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assets extends Model {

    static associate({ Users }) {
      this.belongsTo(Users, {
        foreignKey: 'userId', 
        as: 'user' 
      })
    }
  };
  Assets.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    domains: DataTypes.ARRAY(DataTypes.STRING),
    emails: DataTypes.ARRAY(DataTypes.TEXT),
    images: DataTypes.ARRAY(DataTypes.TEXT)
  }, {
    sequelize,
    tableName: 'assets',
    modelName: 'Assets',
  });
  return Assets;
};