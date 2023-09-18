const Users = require("./users");
const Products = require("./products");
const UserProductDetail = require("./user_product_detail");

// Products.belongsToMany(Users, { through: UserProductDetail });

module.exports = {
  Users,
  Products,
  UserProductDetail,
};
