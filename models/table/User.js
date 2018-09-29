/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updatedAt'
    }
  }, {
    tableName: 'User'
  });
};
