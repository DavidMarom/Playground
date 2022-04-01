const express = require('express')
const { passParams, postBody, single } = require('./file.controller')
const router = express.Router()
const { upload } = require('./file.service')



router.post('/', postBody);
router.get('/pass-params/:aaa', passParams);
router.post('/single', upload.single('file'), single);


module.exports = router