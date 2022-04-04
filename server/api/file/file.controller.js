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
    console.log('req.file.filename:', req.file.filename);
    res.send("insertToDb");
}

module.exports = { passParams, postBody, single, insertToDB }