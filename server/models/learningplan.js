'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LearningPlan.init({
    methode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LearningPlan',
  });
  return LearningPlan;
};