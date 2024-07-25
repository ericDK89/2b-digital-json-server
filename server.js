const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*', // Permite todas as origens
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

app.get('/api/product/:id', (req, res) => {
  res.json({ product: req.params.id });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
