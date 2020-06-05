import Database from '../DM/Database';
import DAPATH from '../DM/DAPATH';
import requiredSubjectList from '../DM/jsonfiles/requiredSubjectList';
import designSubjectList from '../DM/jsonfiles/designSubjectList';
import Student from '../DM/Student';
import startupSubjectList from '../DM/jsonfiles/startupSubjectList';
import recommendedSubjectList from '../DM/jsonfiles/recommendedSubjectList';

const NO_TRACK = "no track";
let student = new Student
export default class GInfoCheckViewModel {
    INFO_LIST = {
        0: //COMPUTPER_ABEEK
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getDesignUIstring],
        1: //GLOBAL_SOFTWARE_DOUBLE_MAJOR
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getStartupUIstring],
        2: //GLOBAL_SOFTWARE_OVERSEAS_UNIV
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getStartupUIstring],
        3: //GLOBAL_SOFTWARE_MASTERS_CHAINING 
            [this.getGraduationInfoUIstring, this.getRequiredUIstring,],
        4: //FINTECH 
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
        5: //BIGDATA 
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
        6: //MEDIAART
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
        7: //CONSTRUCTION_IT
            [this.getGraduationInfoUIstring, this.getRequiredUIstring, this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
    }
    track_list = [DAPATH.COMPUTPER_ABEEK, DAPATH.GLOBAL_SOFTWARE_DOUBLE_MAJOR, DAPATH.GLOBAL_SOFTWARE_OVERSEAS_UNIV,
    DAPATH.GLOBAL_SOFTWARE_MASTERS_CHAINING, DAPATH.FINTECH, DAPATH.BIGDATA, DAPATH.MEDIAART, DAPATH.CONSTRUCTION_IT];

    getDesignUIstring(trackname) {
        return getUIstring(1, trackname, Database.getDesignSubjectList(), DAPATH.GRAINFO_DESIGN);
    }

    getStartupUIstring(trackname) {
        return getUIstring(1, trackname, Database.getStartupSubjectList(), DAPATH.GRAINFO_STARTUP);
    }

    getRequiredUIstring(trackname) {
        return getUIstring(0, trackname, Database.getRequiredSubjectLists(), DAPATH.GRAINFO_REQUIRED);
    }

    getRecommendedUIstring(trackname) {
        return getUIstring(0, trackname, Database.getRecommendedSubjectLists(), DAPATH.GRAINFO_COMBINED);
    }

    getGraduationInfoUIstring(trackname) {
        return getUIstring(-1, trackname, Database.getGraduationInfoLists(), DAPATH.GRAINFO_GRADUATION);
    }

    getSWgeneralUIstring(trackname) {
        return getUIstring(-2, trackname, Database.getRequiredSubjectLists(), DAPATH.SOFTWARE_COMBINED_GENERAL);
    }

    getSWcommonUIstring(trackname) {
        return getUIstring(-2, trackname, Database.getRequiredSubjectLists(), DAPATH.SOFTWARE_COMBINED_COMMON_MAJOR);
    }

    getGInfoCheckUIstring(trackname) {
        let DATA = [];

        this.INFO_LIST[this.track_list.indexOf(trackname)].map(function (func) {
            console.log(func);
            let temp = func(trackname);
            if (temp !== NO_TRACK) { DATA.push(temp); }
        });
        getList();
        return DATA;
    }
}

function getUIstring(num, trackname, info, path) {
    switch (num) {
        
        case -2:info = info[path]; //SW
        
        case -1: // graduationinfo

        case 0: //required, recommended
            if (num !== -2) info = info[trackname];
            if (info === undefined) return NO_TRACK;

        case 1: //Design, StartUp      
            let temp = info.map(function (item) {
                if (num === -1) { // graduationinfo
                    let key = Object.keys(item)[0];
                    if (key !== undefined) return { name: key, value: item[key] };
                } else {
                    if (item[DAPATH.SUBJECT_NAME] !== undefined) return { name: item[DAPATH.SUBJECT_NAME] };
                }
            });
            return { title: path, data: temp };
    }
}

function getList(){
    let tname = "건설IT전공"
    let data = [];
    switch (tname){
        case "심화컴퓨터전공(ABEEK)": 
            data.push(getListData(requiredSubjectList[tname])); data.push(getListData(designSubjectList)); console.log(data);return data;
        case "글로벌소프트웨어전공(다중전공트랙)":
        case "글로벌소프트웨어전공(해외복수학위트랙)":
        case "글로벌소프트웨어전공(학석사연계트랙)":
            data.push(getListData(requiredSubjectList[tname])); data.push(getListData(startupSubjectList)); console.log(data);return data;
        case "핀테크전공":
        case "빅데이터전공":
        case "미디어아트":
        case "건설IT전공":
            data.push(getListData(requiredSubjectList["연계전공공통교육과정"])); 
            data.push(getListData(requiredSubjectList["연계전공교양교육과정"])); 
            data.push(getListData(recommendedSubjectList[tname])); console.log(data);return data;
    }
    

    
    
}

function getListData(subjectList) {
    let data = {};
    let stuPerformed = student.getCompletedSubjectList();
    for (var i=0; i<Object.keys(subjectList).length; i++){
        data[subjectList[i]["교과목명"]] = 'X'
        for (var j=0; j<Object.keys(stuPerformed).length; j++){
            if (subjectList[i]["교과목명"] === stuPerformed[j]["교과목명"] ) {
                data[subjectList[i]["교과목명"]] = 'O'
            }
        }
    }
    return data;
}