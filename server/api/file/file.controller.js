const fileService = require('./file.service')

const passParams = (req, res) => {
    console.log(`${req.params.aaa}`);
}

const postBody = (req, res) => {
    
    console.log('req body', req.body);
    res.send(req.body);
}

module.exports = {
    passParams, postBody
}