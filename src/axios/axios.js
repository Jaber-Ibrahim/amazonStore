import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://fir-eb8fc-default-rtdb.firebaseio.com"
})

export default axiosInstance