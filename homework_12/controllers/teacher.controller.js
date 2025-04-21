const { default: axios } = require("axios");
const { creaateViewpage } = require("../helpers/create.view.page");

const getTeachers=async (req, res) => {
  try {
    // const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    // axios method
    const userData = await axios("https://jsonplaceholder.typicode.com/users");

    const teachers = userData.data;

    res.render(creaateViewpage("teachers"), {
      title: "Teachers page",
      teachers,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Ustoz ma'lumotlarini yuklashda xatolik" });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${teacherId}`
    );
    res.render(creaateViewpage("teacher"), {
      title: "Teachers",
      teacher: data,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Ustoz ma'lumotlarini yuklashda xatolik" });
  }
};

const getAddTeacher = (req, res) => {
  try {
    res.render(creaateViewpage("add-teacher"), {
      title: "Teacher",
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverdan xatolik" });
  }
}

const postAddTeacher = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      {
        username,
        email,
        phone,
      }
    );
    const teacher = userData.data;
    res.render(creaateViewpage("teacher"), {
      title: "Teachers",
      teacher,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverdan xatolik" });
  }
}

const deleteTeacherById =  async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    console.log(userData.data);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send("Serverda xatolik");
  }
}

const getEditTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });

    const teacher = userData.data;
    res.render(creaateViewpage("edit-teacher"), { title: "Teachers", teacher });
  } catch (error) {
    console.log(error);
    res.send("Serverda xatolik");
  }
}

const putEditTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email, phone } = req.body;
    const userData = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        name,
        username,
        email,
        phone,
      }
    );

    const teacher = userData.data;
    res.render(creaateViewpage("teacher"), { title: "Teachers", teacher });
  } catch (error) {
    console.log(error);
    res.send("Serverda xatolik");
  }
};

module.exports = {
  getTeachers,
  getTeacherById,
  getAddTeacher,
  postAddTeacher,
  deleteTeacherById,
  getEditTeacherById,
  putEditTeacherById,
};