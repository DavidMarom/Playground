import Axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

var axios = Axios.create({ withCredentials: true });

export const httpService = {
    get(endpoint, data) {
        console.log('http got', data);
        if (endpoint === 'undefined') { endpoint = '' }
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        console.log('sending to ajax: ', data);
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        });
        console.log('axios returned: ', res);
        return res;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/login');
        }
        throw err;
    }
}