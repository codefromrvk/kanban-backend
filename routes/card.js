const express = require("express");
const {
  getCards,
  addCard,
  deleteCard,
  updateCard,
  moveCard,
} = require("../controllers/cardController");

const router = express.Router();

// GET all cards
router.get("/", getCards);

// POST a new card
router.post("/", addCard);

// DELETE a card
router.delete("/:id", deleteCard);

// UPDATE a card
router.patch("/:id", updateCard);

// UPDATE a card with change in board name
router.post("/:id", moveCard);

module.exports = router;
