'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adoptionHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      adoptionHistory.associate=(models)=>{
        adoptionHistory.belongsTo(models.pet,{foreignKey:"petId",as:"pet"})
      }
      // define association here
    }
  }
  adoptionHistory.init({
    petId: {type : DataTypes.STRING,references:{model:"pet", key: "id"}},
    adopterName: DataTypes.STRING,
    email: DataTypes.STRING,
    adoptionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'adoptionHistory',
  });
  return adoptionHistory;
};