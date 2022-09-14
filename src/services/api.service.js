import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

function getProductsByCategory(category) {
    return axios.get(`${BASE_URL}/products/category/${category}`)
}
function getCartItemsByUserId(userId) {
    return axios.get(`${BASE_URL}/cartItems/${userId}`)
}

function getAllProducts() {
    return axios.get(`${BASE_URL}/products`)
}

function getFeaturedProducts() {
    return axios.get(`${BASE_URL}/products/featured`)
}

function getProductById(productId) {
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

function addToCart(activeUserId, itemId, price) {
    return axios.post(`${BASE_URL}/cartItems`, {
        customerId: activeUserId,
        productId: itemId,
        quantity: 1,
        total: price
    });
}

function removeFromCart(activeUserId, itemId) {
    return axios.delete(`${BASE_URL}/cartItems/${activeUserId}/${itemId}`);
}

function increaseQuantity(activeUserId, itemId, price) {
    return axios.put(`${BASE_URL}/cartItems/increase`, {
        customerId: activeUserId,
        productId: itemId,
        price
    });
}

function decreaseQuantity(activeUserId, itemId, price) {
    return axios.put(`${BASE_URL}/cartItems/decrease`, {
        customerId: activeUserId,
        productId: itemId,
        price
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
    getProductById,
    searchProducts,
    addToCart,
    getCartItemsByUserId,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}
