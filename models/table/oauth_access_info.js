/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauthAccessInfo', {
    id: {
      type: DataTypes.INTEGER(11),
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
    oauthAccessId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'oauth_access_id'
    },
    appid: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'appid'
    },
    nickName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: '',
      field: 'nick_name'
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'user_name'
    },
    headImg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'head_img'
    },
    suncodeUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'suncode_url'
    },
    qrcodeUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'qrcode_url'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'description'
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'address'
    },
    tag: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'tag'
    },
    firstId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'first_id'
    },
    firstClass: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'first_class'
    },
    secondId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'second_id'
    },
    secondClass: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'second_class'
    },
    thirdId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'third_id'
    },
    thirdClass: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'third_class'
    },
    userVersion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_version'
    },
    userDesc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_desc'
    },
    auditStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'audit_status'
    },
    auditReason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'audit_reason'
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
    tableName: 'oauth_access_info'
  });
};
