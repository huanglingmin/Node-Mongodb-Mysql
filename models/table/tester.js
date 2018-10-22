/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tester', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'user_id'
    },
    oauthAccessId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'oauth_access_id'
    },
    appid: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'appid'
    },
    tester: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'tester'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_at'
    }
  }, {
    tableName: 'tester'
  });
};
