/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('page', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    merchantId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'merchant_id'
    },
    appid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '',
      field: 'appid'
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: '',
      field: 'title'
    },
    bgColor: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '',
      field: 'bg_color'
    },
    bgImg: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: '',
      field: 'bg_img'
    },
    bgTransparency: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0',
      field: 'bg_transparency'
    },
    linkTab: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '',
      field: 'link_tab'
    },
    deleted: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0',
      field: 'deleted'
    },
    gmtCreate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'gmt_create'
    },
    gmtModify: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'gmt_modify'
    }
  }, {
    tableName: 'page'
  });
};
