/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setting', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    templateId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'template_id'
    },
    oauthAccessId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'oauth_access_id'
    },
    oauthAccesssInfoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'oauth_accesss_info_id'
    },
    api: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'api'
    },
    resource: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'resource'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name'
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
    },
    userDesc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_desc'
    },
    userVersion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_version'
    }
  }, {
    tableName: 'setting'
  });
};
