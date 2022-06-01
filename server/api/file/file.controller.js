const fs = require('fs')


const passParams = (req, res) => {
    console.log(`${req.params.aaa}`);
}

const postBody = (req, res) => {
    console.log('req body', req.body);
    res.send(req.body);
}

const single = (req, res) => {
    console.log('req.file.filename:', req.file.filename);
    res.send("sent");
}

const insertToDB = (req, res) => {
    let arr = [];
    console.log('controller: req.file.filename:', req.file.filename);
    fs.readFile('./uploads2/' + req.file.filename, function (err, data) {
        if (err) throw err;
        arr = data.toString().replace(/\r\n/g, '\n').split('\n');
        console.log(arr);
    });

    await fileService.update(book)


    res.send("insertToDb: ", arr);


}

module.exports = { passParams, postBody, single, insertToDB }