const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("the_modern_touch", "root", "12abcd34", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối thành công!");
  } catch (error) {
    console.error("Kết nối thất bại", error);
  }
};
export default dbConnect;
