import axios from "axios";


export class RecoverAPI {

    static async responseRecoverPasswordByMail(data) {
        return axios.post("http://localhost:8080/diary/API/reset_pass", data)
    }

    static async responseUpdatePassword(data, token) {
        return axios.post("http://localhost:8080/diary/API/update_pass", data, {
            headers: {
                Authorization: token
            }
        })
    }

}