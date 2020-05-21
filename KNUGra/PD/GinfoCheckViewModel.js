import Database from '../DM/Database';
import DAPATH from '../DM/DAPATH';

const NO_TRACK = "no track";

export default class GInfoCheckViewModel {
    INFO_LIST = {
        0 : //COMPUTPER_ABEEK
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getDesignUIstring],
        1 : //GLOBAL_SOFTWARE_DOUBLE_MAJOR
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getStartupUIstring],
        2 : //GLOBAL_SOFTWARE_OVERSEAS_UNIV
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getStartupUIstring],
        3 : //GLOBAL_SOFTWARE_MASTERS_CHAINING 
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,],
        4 : //FINTECH 
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getRecommendedUIstring,this.getSWcommonUIstring,this.getSWgeneralUIstring], 
        5 : //BIGDATA 
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getRecommendedUIstring,this.getSWcommonUIstring,this.getSWgeneralUIstring],
        6 : //MEDIAART
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getRecommendedUIstring,this.getSWcommonUIstring,this.getSWgeneralUIstring], 
        7 : //CONSTRUCTION_IT
            [this.getGraduationInfoUIstring,this.getRequiredUIstring,this.getRecommendedUIstring,this.getSWcommonUIstring,this.getSWgeneralUIstring],
    }
    track_list = [DAPATH.COMPUTPER_ABEEK,DAPATH.GLOBAL_SOFTWARE_DOUBLE_MAJOR,DAPATH.GLOBAL_SOFTWARE_OVERSEAS_UNIV,
        DAPATH.GLOBAL_SOFTWARE_MASTERS_CHAINING,DAPATH.FINTECH,DAPATH.BIGDATA,DAPATH.MEDIAART,DAPATH.CONSTRUCTION_IT];

    getDesignUIstring(trackname){
        return getUIstring(1,Database.getDesignSubjectList(),DAPATH.GRAINFO_DESIGN);
    }
    getStartupUIstring(trackname){
        return getUIstring(1,Database.getStartupSubjectList(),DAPATH.GRAINFO_STARTUP);
        let temp = Database.getStartupSubjectList().map(function(item){
            if (item[DAPATH.SUBJECT_NAME] !== undefined)
                return {name: item[DAPATH.SUBJECT_NAME]};
        }) ;

        return{title: DAPATH.GRAINFO_STARTUP,data: temp};
    }
    getRequiredUIstring(trackname){
        let info_arr = Database.getRequiredSubjectLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return NO_TRACK;
        let temp = info_arr.map(function(item){
            if (item[DAPATH.SUBJECT_NAME] !== undefined)
                return {name: item[DAPATH.SUBJECT_NAME]};
        }) ;

        return{title: DAPATH.GRAINFO_REQUIRED,data: temp};
    }
    getRecommendedUIstring(trackname){
        let info_arr = Database.getRecommendedSubjectLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return NO_TRACK;
        let temp =  info_arr.map(function(item){
            if (item[DAPATH.SUBJECT_NAME] !== undefined)
                return {name: item[DAPATH.SUBJECT_NAME]};
        }) ;

        return{title: DAPATH.GRAINFO_COMBINED,data: temp};
    }
    getGraduationInfoUIstring(trackname){
        let info_arr = Database.getGraduationInfoLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return NO_TRACK;
        let temp = info_arr.map(function(item){
            let key = Object.keys(item)[0];
            if (key !== undefined) return {name: key,value: item[key]};
        });

        return{title: DAPATH.GRAINFO_GRADUATION,data: temp};
    }
    getSWgeneralUIstring(trackname){
        return getSW(DAPATH.SOFTWARE_COMBINED_GENERAL);
    }
    getSWcommonUIstring(trackname){
       return getSW(DAPATH.SOFTWARE_COMBINED_COMMON_MAJOR);
    }

    getGInfoCheckUIstring(trackname){
        let DATA = [];
        
        this.INFO_LIST[this.track_list.indexOf(trackname)].map(function(func){
            console.log(func);
            let temp = func(trackname);
            if (temp !== NO_TRACK){DATA.push(temp);}
        });
        return DATA;
    }
}

function getSW(info){
    let info_arr = Database.getRequiredSubjectLists()[info]
    if (info_arr === undefined) return NO_TRACK
    let temp = info_arr.map(function(item){
        if (item[DAPATH.SUBJECT_NAME] !== undefined)
            return {name: item[DAPATH.SUBJECT_NAME]};
    });

    return {title: info,data: temp};
}

function getUIstring(num,info,path){
    switch(num){
        case 1: //need list,path
            let temp =  info.map(function(item){
            if (item[DAPATH.SUBJECT_NAME] !== undefined)
                return {name: item[DAPATH.SUBJECT_NAME]};
        }) ;
        return{title: path,data: temp};
    }
    

}