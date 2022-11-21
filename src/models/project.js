"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      imageId: DataTypes.STRING,
      description: DataTypes.TEXT,
      client: DataTypes.STRING,
      design: DataTypes.STRING,
      location: DataTypes.STRING,
      lotArea: DataTypes.STRING,
      constructionArea: DataTypes.STRING,
      publicArea: DataTypes.STRING,
      stories: DataTypes.STRING,
      style: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
