const express = require('express');
const router = express.Router()

const { create, read} = require('../controllers/UnitId');
// find spec tipul
router.get('/UnitId', read)

// post a tipul
router.post('/UnitId/create',create);

module.exports = router;

