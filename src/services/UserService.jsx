import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5000/users";

const login_API_BASE_URL = "http://localhost:5000/login";

class UserService {   
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
    loginUser(user){
       
        return axios.put(login_API_BASE_URL, user);
    }

}

export default new UserService()