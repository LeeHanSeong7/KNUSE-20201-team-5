import DesignSubjectListJSON from './jsonfiles/designSubjectList';
import GraduationInfoListsJSON from './jsonfiles/graduationInfoLists';
import RecommendedSubjectListJSON from './jsonfiles/recommendedSubjectList';
import RequiredSubjectListJSON from './jsonfiles/requiredSubjectList';
import StartupSubjectListJSON from './jsonfiles/startupSubjectList';

let designSubjectList = null;
let requiredSubjectList = null;
let startupSubjectList = null;
let recommendedSubjectList = null;
let graduationInfoLists = null;

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
    user : new User(null),
    serverConnect : new ServerConnect(),

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
}

Object.freeze(Database);
export default Database;