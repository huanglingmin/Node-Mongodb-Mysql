/* jshint indent: 2 */
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    iphone: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      field: 'iphone'
    },
    username: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      field: 'username'
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      field: 'password'
    },
    role: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      field: 'role'
    },
    delete: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      field: 'delete'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
      get () {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  }, {
      tableName: 'user'
    });
};
