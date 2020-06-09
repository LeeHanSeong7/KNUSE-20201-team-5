const NO_PROBLEM = 0
const ID_PASSWARD_INCORRECT = 1
const PASSWORD_CHANGE_DATE_THREE_MONTHS = 2
const EXCEPTION = 3

export default class ServerConnect {
    #hostIP;

    constructor(){
        this.#hostIP = null;
    }
    getDataFromServer(id , pw, major, requesttype){
        
    }
    login(id, pw, major) {
        let result = this.getDataFromServer(id,pw,major,"login");

        if(result["login"] == "success"){
            return true;
        }
        else{
            return result["errorCode"];
        }
    }
    logout(id) {
        
    }
    updateStudent(id, major){
        
    }
}
