const userService = require('./user.service')


async function getUsers(req, res) {
    const users = await userService.query(req.query)
    res.send(users)
}

async function add(req, res) {
    const col2 = req.body.col2;
    const col3 = req.body.col3;

    console.log('controller: ', col2, col3);
    const users = await userService.addUser(col2,col3);
    res.send(users)
}



module.exports = {
    getUsers,
    add

}