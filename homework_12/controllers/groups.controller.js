const { creaateViewpage } = require("../helpers/create.view.page");

const getGroups = (req, res) => {
  res.render(creaateViewpage("groups"), { title: "Groups page" });
};

module.exports={
    getGroups
}