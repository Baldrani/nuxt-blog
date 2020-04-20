import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:3333`,
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
        return apiClient('/events/' + id)
    }
}
