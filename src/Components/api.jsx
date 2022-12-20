import axios from "axios";

export const getData = () => {
    return axios.get(`https://dbjson.onrender.com/posts`)
}
export const postData = (data) => {
    axios.post(`https://dbjson.onrender.com/posts`,
        data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
export const deleteData = (id) => {
    return axios.delete(`https://dbjson.onrender.com/posts/${id}`)
}
