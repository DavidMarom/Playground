const MongoClient = require('mongodb').MongoClient;
let db_pass = require("./pass");
const uri = 'mongodb+srv://admin:' + db_pass.db_pass + '@cluster0.mb30w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = {
	getCollection
}

// Database Name
const dbName = 'templateDB';

var dbConn = null;

async function getCollection(collectionName) {
	const db = await connect()
	return db.collection(collectionName);
}

async function connect() {
	if (dbConn) return dbConn;
	try {
		console.log('db.service connect');
		const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		const db = client.db(dbName);
		dbConn = db;
		return db;
	} catch (err) {
		console.log('Cannot Connect to DB', err)
		throw err;
	}
}