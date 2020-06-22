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

    getDataFromServer(id , pw, major, requestType){
        let result = null;
        const json = {'requestType':requestType,"id":id, "pwd":pw, "major":convertToServerMajor(major)};
        const string = JSON.stringify(json);
        const client = TcpSocket.createConnection({port:this.#port, host:this.#hostIP});
        console.log(id + "  " + major);

        client.write(string);   
        client.on('data', (data)=> {   
            let result = 0;
            console.log('Re: ' + "  data" + '\nlength:' + Object.keys(data).length);
           

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
                        //console.log(jsObject);
                    } catch (error) {
                        console.log("no parsing : ");
                    }
                        
                }
            }
                
            console.log("after error");
            switch(requestType) {
                case RequestType.LOGIN:
                    if (jsObject["login"] === "success") {
                        Database.getStore().dispatch({type: types.LOGIN_SUCCESS});
                    } else {
                        Database.getStore().dispatch({type: types.LOGIN_FAIL});
                    }
                    console.log(jsObject);
                    dataString = null;
                    break;
                case RequestType.UPDATE:
                    try {
                        //console.log(jsObject);
                    } catch (error) {
                        
                    }
                    
                    const student = Database.getStudent();
                    student.setJson(jsObject);
                    //student.setCareerList(jsObject['getGradeInfo']);
                    //student.setCompletedSubjectList(jsObject['completeSubjectList']);
                    Database.getStore().dispatch({type: types.UPDATE_SUCCEES});
                    break;
            }
            client.destroy();
        });
        //
        return result;
    }
    
    login(id, pw, major) {
        this.getDataFromServer(id,pw,major, RequestType.LOGIN);
    }

    logout(id) {
    }

    updateStudent(id, major){
        console.log("updateStudent : "+id);
        this.getDataFromServer(id, null, major, RequestType.UPDATE);
    }
}
