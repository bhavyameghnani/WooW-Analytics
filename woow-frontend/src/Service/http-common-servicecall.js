import axios from 'axios';

export default axios.create({
    baseURL: "https://woow-analytics.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
});