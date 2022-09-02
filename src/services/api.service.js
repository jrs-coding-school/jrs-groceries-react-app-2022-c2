import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';


function getAllUsers() {
    return axios.get(`${BASE_URL}/users`)
}

function getUserById(userId) {
    return axios.get(`${BASE_URL}/users/${userId}`)
}

function createUser({ email, password }) {
    return axios.post(`${BASE_URL}/users`,
        { email, password })
}

function updateUser({ email, password }) {
    return axios.put(`${BASE_URL}/users/${userId}`,
        { email, password })
}

function deleteUserById(userId) {
    return axios.delete(`${BASE_URL}/heroes/${userId}`);
}


function useApi() {
    return {
        getAllUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUserById
    }
}

export { useApi }