'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate({ Assets, Reports }) {
      this.hasOne(Assets, {
        foreignKey: 'userId',
        as: 'assets',
        onDelete: 'CASCADE'
      })

      this.hasMany(Reports, {
        foreignKey: 'userId',
        as: 'reports',
        onDelete: 'CASCADE'
      })
    }

  };
  Users.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: "Email can't be empty" },
        isEmail: { msg: 'Email must have a valid format' }
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: "Email can't be empty" }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: "Email can't be empty" }
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: "Email can't be empty" }
      }
    },
    cif: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'User must have a CIF' },
        notEmpty: { msg: "Email can't be empty" },
        is: {
          args: /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/,
          msg: "CIF need to be a valid CIF format"
        }
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};