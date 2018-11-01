/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
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
    title: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: '',
      field: 'title'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  }, {
    tableName: 'article'
  });
};
