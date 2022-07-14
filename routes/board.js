const express = require("express");
const {
  getBoards,
  addBoard,
  deleteBoard,
  updateBoard,
} = require("../controllers/boardController");

const router = express.Router();

// GET all boards
router.get("/", getBoards);

// POST a new board
router.post("/", addBoard);

// DELETE a board
router.delete("/:id", deleteBoard);

// UPDATE a board
router.patch("/:id", updateBoard);

module.exports = router;
