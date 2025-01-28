'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pet.associate=(models)=>{
        pet.hasOne(models.adoptionHistory,{foreignKey:"petId",as:"adoptionHistory"})
      }
      // define association here
    }
  }
  pet.init({
    species: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.STRING,
    health: DataTypes.STRING,
    tagNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};