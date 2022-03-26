const express = require('express')
const { passParams, postBody } = require('./file.controller')
const router = express.Router()


router.post('/', postBody);
router.get('/pass-params/:aaa', passParams);




module.exports = router