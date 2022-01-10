import axios from "axios";

export class CrudAPI {

    constructor(path) {
        this.path = path
    }

    async create(data) {
        return axios.post(`http://localhost:8080/diary/API/crud/${this.path}`, data, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }

    async update(data, id) {
        return axios.put(`http://localhost:8080/diary/API/crud/${this.path}`, data, {
            params: {
                id: id
            },
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }

    async delete(id) {
        return axios.delete(`http://localhost:8080/diary/API/crud/${this.path}`, {
            params: {
                id: id
            },
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }
}