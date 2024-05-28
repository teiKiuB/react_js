import axios from "../axios"

const handleLogin = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getUsers = (inputId) => {
    return axios.get(`/api/get-users?id=${inputId}`)
}

const createNewUserSerVice = (data) => {
    return axios.post('/api/create-user', data)
}

const DeleteUserService = (userId) => {
    return axios.delete('/api/delete-user', { data: { id: userId } })
}

const EditUserService = (data) => {
    return axios.put('/api/edit-user', data)

}

const getAllCodeService = (type) => {
    return axios.get(`/api/allcode?type=${type}`)
}

const getTopDoctorHomeServive = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getDoctorsServive = (limit) => {
    return axios.get(`/api/get-doctors`)
}

const SaveDetailDoctorService = (data) => {
    return axios.post('/api/save-info-doctor', data)
}
const getDetailInforDoctor = (id) => {
    return axios.get(`/api/get-detail-doctor?id=${id}`)
}
export { handleLogin, getAllCodeService, getDetailInforDoctor, SaveDetailDoctorService, getDoctorsServive, getTopDoctorHomeServive, EditUserService, getUsers, createNewUserSerVice, DeleteUserService }