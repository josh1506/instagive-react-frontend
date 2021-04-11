import axios from 'axios'

export default axios.create({
    baseURL: 'https://instagive-backend.herokuapp.com'
})