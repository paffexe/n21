const { creaateViewpage } = require("../helpers/create.view.page");

const getStudents = (req, res) => {
  res.render(creaateViewpage("students"), { title: "Students page" });
};

module.exports={
    getStudents
}
