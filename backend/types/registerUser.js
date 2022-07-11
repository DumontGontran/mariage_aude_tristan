class RegisterUser {
    constructor(options){
       this.firstname = options.firstname || "";
       this.lastname = options.lastname || "";
       this.email = options.email ? options.email.toLowerCase().split(" ").join("") : "";
       this.password = options.password || "";
    }
 }

 module.exports = RegisterUser;