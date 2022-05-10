import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NAWx9R89laFUYUdaDAd7rX68IuK49f8IswohQI2HUbA'
    }
})
