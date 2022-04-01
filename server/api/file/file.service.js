
const multer = require('multer')


async function aaa() {
    console.log('in file service');
    return 'ccc';
}

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, "./uploads2") },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    },
})

const upload = multer({ storage: fileStorageEngine });
module.exports = { aaa, upload }
