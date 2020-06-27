import TcpSocket from 'react-native-tcp-socket';
import RequestType from './RequestType';
import {default as D } from './DAPATH';
import Database from './Database';
import types from './actions/types';

const NO_PROBLEM = 0
const ID_PASSWARD_INCORRECT = 1
const PASSWORD_CHANGE_DATE_THREE_MONTHS = 2
const EXCEPTION = 3

let dataString = null;
let jsObject;

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

    loginFromServer(id, pw, major) {
        const json = {'requestType':RequestType.LOGIN,"id":id, "pwd":pw, "major":convertToServerMajor(major)};
        const string = JSON.stringify(json);
        const client = TcpSocket.createConnection({port:this.#port, host:this.#hostIP});
        console.log(id + "  " + major);
        client.write(string);
        client.on('data', (data)=> {   
            let json = JSON.parse(data);
            if (json !== null && json["login"] === "success") {
                Database.getStore().dispatch({type: types.LOGIN_SUCCESS});
            } else {
                Database.getStore().dispatch({type: types.LOGIN_FAIL});
            }
            client.destroy();
        });   
    }

    getDataFromServer(id, major){
        const json = {'requestType':RequestType.UPDATE,"id":id, "major":convertToServerMajor(major)};
        const string = JSON.stringify(json);
        const client = TcpSocket.createConnection({port:this.#port, host:this.#hostIP});
        console.log(id + "  " + major);
        jsObject = null;
        dataString = null;
        console.log(jsObject);

        client.write(string);   
        client.on('data', (data)=> {   
            console.log('Re: ' + "  data" + data + '\nlength:' + Object.keys(data).length);
            try {
                jsObject = JSON.parse(data);
                console.log("dataString = data : ");
                dataString = data;
            } catch (error) {
                console.log("if 1 : ");
                if (dataString === null) {
                    console.log("if 2 : ");
                    dataString = data;
                } else {
                    console.log("else 1 : ");
                    dataString = dataString + data;
                    console.log("concat :");
                    try {
                        jsObject = JSON.parse(dataString);
                    } catch (error) {
                        console.log("no parsing : ");
                    }
                }
            }
            console.log("after error");
            if (jsObject !== null) {
                console.log("GOT !! jsObject");
                console.log(jsObject);
                const student = Database.getStudent();
                student.setCareerList(jsObject['getGradeInfo']);
                student.setCompletedSubjectList(jsObject['completeSubjectList']);
            }
        });
    }
    
    login(id, pw, major) {
        this.loginFromServer(id,pw,major);
    }

    logout(id) {
    }

    updateStudent(id, major){
        console.log("updateStudent : "+id);
        this.getDataFromServer(id, major, RequestType.UPDATE);
    }
}
