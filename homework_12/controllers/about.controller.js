const { creaateViewpage } = require("../helpers/create.view.page");

const getAbout = (req, res) => {
  res.render(creaateViewpage("about"), { title: "About page" });
};

module.exports = {
  getAbout,
};
