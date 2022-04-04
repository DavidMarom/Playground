const express = require('express')
const { passParams, postBody, single, insertToDB } = require('./file.controller')
const router = express.Router()
const { upload } = require('./file.service')

router.post('/', postBody);
router.get('/pass-params/:aaa', passParams);
router.post('/single', upload.single('file'), single);
router.post('/insert-to-db', upload.single('file'), insertToDB);

module.exports = router