const db = require("../db");

// get all cards
const getCards = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM cards");
    res.status(200).json({ msg: "success", data: results.rows });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};
// add card
const addCard = async (req, res) => {
  const { id, bid, title } = req.body;
  console.log(id, bid, title);
  try {
    const results = await db.query(
      "INSERT INTO cards (id,bid,title) VALUES ($1,$2,$3) returning *",
      [id, bid, title]
    );

    console.log(results.rows);
    res.status(200).json({ msg: "success", data: results.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};
// delete card
const deleteCard = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const results = await db.query(
      "DELETE FROM cards WHERE id=$1 returning *",
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
const updateCard = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log(id, title);
  try {
    const results = await db.query(
      "UPDATE cards SET title =$1 WHERE id=$2 returning *",
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
// move card
const moveCard = async (req, res) => {
  const { id } = req.params;
  const { bid } = req.body;
  console.log(id, bid);
  try {
    const results = await db.query(
      "UPDATE cards SET bid =$1 WHERE id=$2 returning *",
      [bid, id]
    );

    console.log("res", results.rows);
    res.status(200).json({ msg: "moved successfully", data: results.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error" });
  }
};

module.exports = {
  getCards,
  addCard,
  deleteCard,
  updateCard,
  moveCard,
};
