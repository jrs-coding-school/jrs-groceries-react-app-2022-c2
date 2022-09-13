import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

function getProductsByCategory(category) {
    return axios.get(`${BASE_URL}/products/category/${category}`)
}

function getAllProducts() {
    return axios.get(`${BASE_URL}/products`)
}

function getFeaturedProducts() {
    return axios.get(`${BASE_URL}/products/featured`)
}

function getProductsById(productId) {
    return axios.get(`${BASE_URL}/products/${productId}`)
}

function searchProducts(searchParam) {
    return axios.get(`${BASE_URL}/products/search/${searchParam}`)
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

function addToCart(activeUser, id, price) {
    console.log(activeUser, id, price)
    return axios.post(`${BASE_URL}/cartItems`, {
        customerId: activeUser,
        productId: id,
        quantity: 1,
        total: price
    });
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
    getProductsByCategory,
    getFeaturedProducts,
    getProductsById,
    searchProducts,
    addToCart
}
