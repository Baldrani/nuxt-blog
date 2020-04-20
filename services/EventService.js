import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Baldrani/nuxt-blog',
    withCredentials: false,
    headers: {
        Accept: 'applciation/json',
        'Content-Type': 'applciation/josn'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}
