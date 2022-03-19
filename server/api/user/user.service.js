const db = require('../../services/sql.service')

module.exports = {
    query,
    addUser
}

async function query() {
    const collection = await db.execute('SELECT * FROM tab_a')

    try {
        const users = collection[0];
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}


async function addUser(col2,col3) {
    console.log('service: ',col2,col3);

    const collection = await db.execute('INSERT INTO tab_a (col2,col3) VALUES (?,?)',[col2,col3]);
    try {
        const users = collection[0];
        return users
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


// async function getById(userId) {
//     const collection = await dbService.getCollection('user')
//     try {
//         const user = await collection.findOne({ "_id": ObjectId(userId) })
//         // delete user.password
//         console.log('getById', user)
//         user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
//         user.givenReviews = user.givenReviews.map(review => {
//             delete review.byUser
//             return review
//         })


//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${userId}`)
//         throw err;
//     }
// }
// async function getByEmail(email) {
//     const collection = await dbService.getCollection('user')
//     console.log('collection-',collection);
//     try {
//         const user = await collection.findOne({ email })
//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${email}`)
//         throw err;
//     }
// }

// async function remove(userId) {
//     const collection = await dbService.getCollection('user')
//     try {
//         await collection.deleteOne({ "_id": ObjectId(userId) })
//     } catch (err) {
//         console.log(`ERROR: cannot remove user ${userId}`)
//         throw err;
//     }
// }

// async function update(user) {
//     const collection = await dbService.getCollection('user')
//     user._id = ObjectId(user._id);

//     try {
//         await collection.replaceOne({ "_id": user._id }, user )
//         return user
//     } catch (err) {
//         console.log(`ERROR: cannot update user ${user._id}`)
//         throw err;
//     }
// }


// function _buildCriteria(filterBy) {
//     const criteria = {};
//     // if (filterBy.txt) {
//     //     criteria.fullName = filterBy.txt
//     // }
//     // if (filterBy.minBalance) {
//     //     criteria.balance = { $gte: +filterBy.minBalance }
//     // }
//     return criteria;
// }


