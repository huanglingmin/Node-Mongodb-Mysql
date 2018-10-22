/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('component', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      field: 'type'
    },
    moduleType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      field: 'module_type'
    },
    listorder: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      field: 'listorder'
    },
    pageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'page_id'
    },
    deleted: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
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
    },
    content: {
      type: DataTypes.STRING(2048),
      allowNull: false,
      defaultValue: '',
      field: 'content'
    }
  }, {
    tableName: 'component'
  });
};
