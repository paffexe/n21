const { default: axios } = require("axios");
const { creaateViewpage } = require("../helpers/create.view.page");

const getComments = async (req, res) => {
  try {
    const commData = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const comments = commData.data;

    res.render(creaateViewpage("comments"), {
      title: "Comments page",
      comments,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Comment ma'lumotlarini yuklashda xatolik" });
  }
};

const getCommentByid = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );

    res.render(creaateViewpage("comment"), {
      title: "Comment",
      comment: data,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Comment yuklashda xatolik" });
  }
};

const getAddComment = async (req, res) => {
  try {
    res.render(creaateViewpage("add-comment"), {
      title: "Comment",
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Comment yuklashda xatolik" });
  }
};

const postAddComment = async (req, res) => {
  try {
    const { name, email, body } = req.body;
    const commData = await axios.post(
      "https://jsonplaceholder.typicode.com/comments/",
      {
        name,
        email,
        body,
      }
    );
    const comment = commData.data;
    res.render(creaateViewpage("comment"), {
      title: "Comments",
      comment,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverdan xatolik" });
  }
};

const deleteCommById = async (req, res) => {
  try {
    const { id } = req.params;
    const commData = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    console.log(commData);
    res.send(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};

const getEditCommById = async (req, res) => {
  try {
    const { id } = req.params;
    const commData = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
    );
    const comment = commData.data;
    res.render(creaateViewpage("edit-comment"), {
      title: "Comments",
      comment,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};

const putEditCommById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, body } = req.body;
    const commData = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        name,
        email,
        body,
      }
    );
    const comment = commData.data;
    res.render(creaateViewpage("comment"), { title: "Comment", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverdan xatolik" });
  }
};

module.exports = {
  getComments,
  getCommentByid,
  getAddComment,
  postAddComment,
  deleteCommById,
  getEditCommById,
  putEditCommById,
};
