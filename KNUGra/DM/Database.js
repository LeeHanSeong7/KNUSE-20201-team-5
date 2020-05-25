import DesignSubjectListJSON from './jsonfiles/designSubjectList';
import GraduationInfoListsJSON from './jsonfiles/graduationInfoLists';
import RecommendedSubjectListJSON from './jsonfiles/recommendedSubjectList';
import RequiredSubjectListJSON from './jsonfiles/requiredSubjectList';
import StartupSubjectListJSON from './jsonfiles/startupSubjectList';
import User from './User.js';
import ServerConnect from './ServerConnect.js';

let designSubjectList = null;
let requiredSubjectList = null;
let startupSubjectList = null;
let recommendedSubjectList = null;
let graduationInfoLists = null;
let user = new User();
let serverConnect = new ServerConnect();

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
        return serverConnect.login(id,pw,major);
    },
    getStudent : function(){
        return user.getStudent();
    },
    update : function(){
        serverConnect.updateStudent();
    }
}

Object.freeze(Database);
export default Database;
