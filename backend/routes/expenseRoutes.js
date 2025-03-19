const express = require("express");
const router = express.Router();

let expenses = [];

router.get("/", (req, res) => {
    res.json(expenses);
});

router.post("/", (req, res) => {
    const { description, amount, category } = req.body;
    const newExpense = { id: expenses.length + 1, description, amount, category };
    expenses.push(newExpense);
    res.json(newExpense);
});

module.exports = router;
