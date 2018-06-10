const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling Get request',
  });
});

router.post('/', (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(200).json({
    message: 'Handling Get request',
    createdProduct: product,
  });
});

router.get('/:productId', (req, res) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special',
      id,
    });
  } else {
    res.status(201).json({
      message: 'You passed an ID',
    });
  }
});
module.exports = router;
