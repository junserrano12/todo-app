import axios from 'axios';

const addHotel = async(data) => {
    const response = await axios.post('http://localhost:8082/api/v1/hotels', data)
    return response
}

const updateHotel = async(id, data) => {
    const response = await axios.put(`http://localhost:8082/api/v1/hotels/${id}`, data)
    return response
}

const getHotels = async() => {
    const response = await axios.get('http://localhost:8082/api/v1/hotels')
    return response
}

const deleteHotel = async(id) => {
    const response = await axios.delete(`http://localhost:8082/api/v1/hotels/${id}`)
    return response
}

const signUpUser = async(data) => {
    const response = await axios.post(`http://localhost:8082/api/v1/users/signup`, data)
    return response
}

const loginUser = async(data) => {
    const response = await axios.post(`http://localhost:8082/api/v1/users/login`, data)
    return response
}

export {
    addHotel,
    getHotels,
    deleteHotel,
    updateHotel,
    signUpUser,
    loginUser
}