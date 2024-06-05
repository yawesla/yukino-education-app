'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Information.init({
    user_id: DataTypes.INTEGER,
    learningPlan_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    notes_id: DataTypes.INTEGER,
    tracker_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Information',
  });
  return Information;
};