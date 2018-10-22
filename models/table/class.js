/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('class', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'parent_id'
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'title'
    },
    childCount: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'child_count'
    },
    listorder: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'listorder'
    },
    catType: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'cat_type'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_at'
    }
  }, {
    tableName: 'class'
  });
};
