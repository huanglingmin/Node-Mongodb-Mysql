/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    username: {
      field: 'username',
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    password: {
      field: 'password',
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  });
};
