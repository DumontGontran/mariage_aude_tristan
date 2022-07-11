class LoginUser {
    constructor(options){
       this.email = options.email ? options.email.toLowerCase().split(" ").join("") : "";
       this.password = options.password || "";
    }
 }

 module.exports = LoginUser;