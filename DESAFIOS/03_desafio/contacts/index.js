const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/contacts.html'));
});

module.exports = router;
