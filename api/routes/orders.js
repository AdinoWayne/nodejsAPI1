const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.status(201).json({
    message: 'Orders were fetched',
  });
});
router.post('/', (req, res) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: 'Orders were fetched',
    order,
  });
});

module.exports = router;
