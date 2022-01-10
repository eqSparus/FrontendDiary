import axios from "axios";

export class UpdateAPI {

    static async updatePassword(password, newPassword) {
        return axios.put("http://localhost:8080/diary/API/update/password", {}, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
            params: {
                password: password,
                newPassword: newPassword
            }
        })
    }


    static async updateName(data) {
        return axios.put("http://localhost:8080/diary/API/update/username", data, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }
}