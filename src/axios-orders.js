import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-builder-39fdf.firebaseio.com/",
});

export default instance;
