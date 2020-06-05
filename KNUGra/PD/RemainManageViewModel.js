import Database from '../DM/Database';
import DAPATH from '../DM/DAPATH';
import { detailList } from '../DM/DAPATH';
import Student from '../DM/Student';

const NO_TRACK = "no track";
let student = new Student

//문자정보 처리방식
let stustat = {}
stustat[DAPATH.GRAINFO_ENGLISH] = ["fail","pass"];
//-----//

export default class RemainManageViewModel {
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

    getManageRemainUIstring(trackname) {
        let DATA = [];
        let temp = [];let arr1 = []; let arr2 = [];
        let d_list = [];
        let carrylist = {};

        function progressMapping(item){
            const subj = item.name;
            let stuV = carrylist[subj];
        
            if (stuV == undefined){//학생이 관련정보가 없을때
                if (Number.isInteger(item.value)){//숫자정보 일때
                    item.value = `-/${item.value}`;
                    item.progress = 0;
                }
                else if (subj in stustat){//문자정보일때 처리방식이 정의되어 있음
                    item.value = `정보없음`;
                    item.progress = 0;
                }
                else 
                    return;
            }
            else{
                if (Number.isInteger(item.value)){//숫자정보 일때
                    item.progress = Math.floor((stuV*100)/item.value)/100;
                    if (item.progress > 1) item.progress = 1;
                    item.value = `${stuV}/${item.value}`;
                }
                else if (subj in stustat){//문자정보일때 처리방식이 정의되어 있음
                    item.value = `${stuV}`;
                    if (stuV == stustat[subj][1])
                        item.progress = 1;
                    else   
                        item.progress = 0;
                }
                else 
                    return;
            }
            temp.push(item);
        }

        student.getCareerList().map(function(item){
            let key = Object.keys(item)[0];
            carrylist[key]=item[key];
        });
        
        //temp 에 총합 추가해야함
        this.getGraduationInfoUIstring(trackname).map(function(item){
                if (detailList.indexOf(item.name) == -1)
                    arr1.push(item);
                else 
                    arr2.push(item);
        });
        arr1.map(progressMapping);
        arr2.map(progressMapping);

        DATA.push({title : '졸업요건 달성현황', data : temp});
        console.log(DATA);
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
        return temp;
    }
}