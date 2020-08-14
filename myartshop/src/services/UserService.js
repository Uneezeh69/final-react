import GenericService from "./GenericService";
class UserService extends GenericService{
    constructor(){
        super();
    }
    login = (email, password) => new Promise((resolve, reject) => {
        this.post("users/login", {username, email} ).then(token => {
            localStorage.setItem("token", token);
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
    });
     
    register = (name, email, dob, password) => this.post("users/signup", {username, email, name, dob} )
    logout = () => {
        localStorage.setItem("token", "");
    };
}

let userService = new UserService;
export default userService;