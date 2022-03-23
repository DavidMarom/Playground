const express = require('express')
const { uploadFile } = require('./file.controller')
const router = express.Router()


router.get('/upload/:aaa', (req, res) => {
    console.log(`${req.params.aaa}`);
})

router.post('/', (req, res) => {
    console.log('req body', req.body);
    res.send(req.body);

})

module.exports = router