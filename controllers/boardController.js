const db = require("../db");

// get all boards
const getBoards = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM boards;");
    res.status(200).json({ data: results.rows });
  } catch (error) {
    console.log(error);
  }
};

// add board
const addBoard = async (req, res) => {
  const { id, title } = req.body;
  console.log(id, title);
  try {
    const results = await db.query(
      "INSERT INTO boards (id,title) VALUES ($1,$2) returning *",
      [id, title]
    );

    console.log(results.rows);
    res.status(200).json({ msg: "successfully added", data: results.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};

// delete board
const deleteBoard = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const results = await db.query(
      "DELETE FROM boards WHERE id=$1 returning *",
      [id]
    );

    console.log(results.rows);
    res
      .status(200)
      .json({ msg: "deleted successfully", data: results.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};

// update card
const updateBoard = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log(id, title);
  try {
    const results = await db.query(
      "UPDATE boards SET title =$1 WHERE id=$2 returning *",
      [title, id]
    );

    console.log(results.rows);
    res
      .status(200)
      .json({ msg: "updated successfully", data: results.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};

module.exports = {
  getBoards,
  addBoard,
  deleteBoard,
  updateBoard,
};
