import DesignSubjectListJSON from './jsonfiles/designSubjectList';
import GraduationInfoListsJSON from './jsonfiles/graduationInfoLists';
import RecommendedSubjectListJSON from './jsonfiles/recommendedSubjectList';
import RequiredSubjectListJSON from './jsonfiles/requiredSubjectList';
import StartupSubjectListJSON from './jsonfiles/startupSubjectList';
import User from './User.js';
import ServerConnect from './ServerConnect.js';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import types from './actions/types';

let designSubjectList = null;
let requiredSubjectList = null;
let startupSubjectList = null;
let recommendedSubjectList = null;
let graduationInfoLists = null;
let user = new User();
let serverConnect = new ServerConnect();
let store;


const loadStore = () => {
    store = createStore(stateReducer);
};

function stateReducer(state = {updateSucceed: false, loggedIn: false}, action) {
    switch (action.type) {
        case types.UPDATE_SUCCEES:
            return {updateSucceed: true, loggedIn: state.loggedIn};
        case types.UPDATE_FAIL:
            return {updateSucceed: false, loggedIn: state.loggedIn};
        case types.LOGIN_SUCCESS: 
            return {updateSucceed: state.updateSucceed, loggedIn: true};
        case types.LOGIN_FAIL: 
            return {updateSucceed: state.updateSucceed, loggedIn: false};
        case types.LOGOUT:
            return {updateSucceed: false, loggedIn: false};
        default:
            return state;
    }
}


const loadDesignSubjectList = () => {
    designSubjectList = DesignSubjectListJSON;
};
const loadRequiredSubjectLists = () => {
    requiredSubjectList = RequiredSubjectListJSON;
};
const loadStartupSubjectList = () => {
    startupSubjectList = StartupSubjectListJSON;
};
const loadRecommendedSubjectLists = () => {
    recommendedSubjectList = RecommendedSubjectListJSON;
};
const loadGraduationInfoLists = () => {
    graduationInfoLists = GraduationInfoListsJSON;
};

const Database =  {
    load : () => {
        loadDesignSubjectList();
        loadRequiredSubjectLists();
        loadStartupSubjectList();
        loadRecommendedSubjectLists();
        loadGraduationInfoLists();
        loadStore();
    },

    getDesignSubjectList: () => {
        return designSubjectList;
    },
    getRequiredSubjectLists: () => {
        return requiredSubjectList;
    },
    getStartupSubjectList: () => {
        return startupSubjectList;
    },
    getRecommendedSubjectLists: () => {
        return recommendedSubjectList;
    },
    getGraduationInfoLists: () => {
        return graduationInfoLists;
    },
    login : function(id,pw,major) {
        serverConnect.login(id,pw,major);
    },
    getStudent : function(){
        return user.getStudent();
    },
    update : function(id, major){
        console.log("db : " + id);
        serverConnect.updateStudent(id, major);
    },
    getStore : function() {
        return store;
    },
}

Object.freeze(Database);
export default Database;
