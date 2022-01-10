const axios = require("axios");

export class AuthAPI {

    static async responseReg(data) {
        return axios.post("http://localhost:8080/diary/API/registration", data)
    }

    static async responseLogin(data) {
        return axios.post("http://localhost:8080/diary/API/login", data)
    }

}