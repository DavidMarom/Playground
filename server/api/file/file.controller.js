const fileService = require('./file.service')

async function uploadFile(req, res) {
    console.log(`***** uploadFile controller ${req.param.aaa}`)
    // const aaa = await fileService.upload(req.query)
    res.send(req.param.aaa)
}



module.exports = {
    uploadFile
}