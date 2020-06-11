import TcpSocket from 'react-native-tcp-socket';
import RequestType from './RequestType';
import {default as D } from './DAPATH';

const NO_PROBLEM = 0
const ID_PASSWARD_INCORRECT = 1
const PASSWORD_CHANGE_DATE_THREE_MONTHS = 2
const EXCEPTION = 3

const convertToServerMajor = (major) => {
    switch(major) {
        case D.COMPUTPER_ABEEK:
            return 'abeek';
        default: return 'global';
    }
};

export default class ServerConnect {
    #hostIP;
    #port;

    constructor(){
        this.#hostIP = '54.180.90.213';
        this.#port = '3456';
    }

    getDataFromServer(id , pw, major, requestType, ){
        let result = null;
        const json = {'requestType':requestType,"id":id, "pwd":pw, "major":convertToServerMajor(major)};
        const string = JSON.stringify(json);
        const client = TcpSocket.createConnection({port:this.#port, host:this.#hostIP});
        
        client.write(string);   
        client.on('data', (data)=> {
            console.log('Re: ' + data);
            result = data;
            if (lgo)
            DataCue.set( ture);
            client.destroy();
        });
        //
        return result;
    }
    
    login(id, pw, major) {
        let result = this.getDataFromServer(id,pw,major, RequestType.LOGIN) ?? {errorCode: EXCEPTION};

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
