const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
    const result = parseInt(req.params.a) + parseInt(req.params.b);
    res.status(200).json({ result });
});

app.get('/divide/:a/:b', (req, res) => {
    const b = parseInt(req.params.b);
    if (b === 0) return res.status(400).json({ error: "Division by zero" });
    const result = parseInt(req.params.a) / b;
    res.status(200).json({ result });
});

module.exports = app;