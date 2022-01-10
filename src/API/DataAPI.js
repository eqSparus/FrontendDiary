import axios from "axios";

export class DataAPI {
    static async getDataUser(token) {
        return axios.get("http://localhost:8080/diary/API/data", {
            headers: {
                Authorization: token
            }
        })
    }
}