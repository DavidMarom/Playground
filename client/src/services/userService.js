import { httpService } from './httpService'


function count() {
    return httpService.get(`user/count`);
}

function getUsers(filter, currPage) {
    return httpService.get(`user/${filter}?page=${currPage}`);
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/update2`, user)
}

// async function login(userCred) {
//     const user = await httpService.post('auth/login', userCred)
// }

// async function signup(userCred) {
//     const user = await httpService.post('auth/signup', userCred)
// }

async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}

function findIdxToMark(suggestions, object) {
    return suggestions.findIndex(suggest => suggest.name === object.name);
}

export const userService = {
    // login,
    logout,
    // signup,
    getUsers,
    getById,
    remove,
    update,
    findIdxToMark,
    count
};