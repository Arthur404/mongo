import axios from 'axios';


export default {
    listNotes() {
        return axios.get(`http://localhost:3001/notes`)
    },

    createNote(data) {
        return axios.post(`http://localhost:3001/notes`, data)
    },

    deleteNote(nodeId) {
        return axios.delete(`http://localhost:3001/notes/${nodeId}`)
    },

    listLocation() {
        return axios.get(`http://localhost:3001/location`)
    },

    createLocation(data) {
        return axios.post(`http://localhost:3001/location`, data)
    },

    deleteLocation(nodeId) {
        return axios.delete(`http://localhost:3001/location/${nodeId}`)
    }
}