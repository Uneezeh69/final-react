import GenericService from "./GenericService";
import jwtDecode from 'jwt-decode';
class UserService extends GenericService{
    constructor(){
        super();
    }
    login = (email, password) =>
     new Promise((resolve, reject) => {
        this.post("users/login", { email, password} ).then(token => {
            localStorage.setItem("token", token);
            resolve(token);
        })
        .catch((err) => {
            reject(err);
        });
    });
     
    register = (name, email, dob, password) => this.post("users/signup", {name, email, dob, password} )
    logout = () => {
        localStorage.removeItem("token");
    };
    isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };

    getloggedInUser = () => {
        try{
            const jwt = localStorage.getItem("token");
            return jwtDecode(jwt);
         } catch(ex){
            return null;
        }
    };

    isAdmin = () => {
       if(this.isLoggedIn()){
           if(this.getloggedInUser().role == 'admin') return true;
           else return false;
       }else return false;
    };
}

let userService = new UserService;
export default userService;