/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauthAccess', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'user_id'
    },
    appid: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'appid'
    },
    accessToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'access_token'
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'refresh_token'
    },
    accessTokenTimeout: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'access_token_timeout'
    },
    refreshToeknTimeout: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'refresh_toekn_timeout'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  }, {
    tableName: 'oauth_access'
  });
};
