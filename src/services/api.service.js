import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

function getProductsByCategory(category) {
    return axios.get(`${BASE_URL}/products/${category}`)
}

function getAllProducts() {
    return axios.get(`${BASE_URL}/products`)
}

function getAllUsers() {
    return axios.get(`${BASE_URL}/users`)
}

function getUserById(userId) {
    return axios.get(`${BASE_URL}/users/${userId}`)
}

function getUserByEmail(email) {
    return axios.get(`${BASE_URL}/users/email/${email}`);
}

function createUser({ email, password }) {
    return axios.post(`${BASE_URL}/users`,
        { email, password })
}

function login({ email, password }) {
    return axios.post(`${BASE_URL}/users/login`,
        { email, password })
}

function updateUser({ email, password, userId }) {
    return axios.put(`${BASE_URL}/users/${userId}`,
        { email, password })
}

function deleteUserById(userId) {
    return axios.delete(`${BASE_URL}/users/${userId}`);
}

export default {
    getAllUsers,
    getUserById,
    getUserByEmail,
    login,
    createUser,
    updateUser,
    deleteUserById,
    getAllProducts,
    getProductsByCategory
}
