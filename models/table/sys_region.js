/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysRegion', {
    regionId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      field: 'region_id'
    },
    regionName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'region_name'
    },
    regionShortName: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'region_short_name'
    },
    regionCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'region_code'
    },
    regionParentId: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'region_parent_id'
    },
    regionLevel: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'region_level'
    }
  }, {
    tableName: 'sys_region'
  });
};
