import Database from '../DM/Database';
import DAPATH from '../DM/DAPATH';

const NO_TRACK = "no track";

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
            [this.getGraduationInfoUIstring,  this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
        5: //BIGDATA 
            [this.getGraduationInfoUIstring,  this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
        6: //MEDIAART
            [this.getGraduationInfoUIstring,this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
        7: //CONSTRUCTION_IT
            [this.getGraduationInfoUIstring,  this.getRecommendedUIstring, this.getSWcommonUIstring, this.getSWgeneralUIstring],
    }
    track_list = [DAPATH.COMPUTPER_ABEEK, DAPATH.GLOBAL_SOFTWARE_DOUBLE_MAJOR, DAPATH.GLOBAL_SOFTWARE_OVERSEAS_UNIV,
    DAPATH.GLOBAL_SOFTWARE_MASTERS_CHAINING, DAPATH.FINTECH, DAPATH.BIGDATA, DAPATH.MEDIAART, DAPATH.CONSTRUCTION_IT];

    getGraduationInfoUIstring(trackname) {
        var info = Database.getGraduationInfoLists()[trackname]
        return getUIstring(-1,  info, DAPATH.GRAINFO_GRADUATION);
    }

    getDesignUIstring(trackname) {
        var info = Database.getDesignSubjectList()
        return getUIstring(1, info, DAPATH.GRAINFO_DESIGN);
    }

    getStartupUIstring(trackname) {
        var info = Database.getStartupSubjectList()
        return getUIstring(1, info, DAPATH.GRAINFO_STARTUP);
    }

    getRequiredUIstring(trackname) {
        var info = Database.getRequiredSubjectLists()[trackname]
        return getUIstring(1, info, DAPATH.GRAINFO_REQUIRED);
    }

    getRecommendedUIstring(trackname) {
        var info = Database.getRecommendedSubjectLists()[trackname]
        return getUIstring(1, info, DAPATH.GRAINFO_COMBINED);
    }

    getSWgeneralUIstring(trackname) {
        var path = DAPATH.SOFTWARE_COMBINED_GENERAL;
        var info = Database.getRequiredSubjectLists()[path];
        return getUIstring(1, info, path);
    }

    getSWcommonUIstring(trackname) {
        var path = DAPATH.SOFTWARE_COMBINED_COMMON_MAJOR
        var info = Database.getRequiredSubjectLists()[path];
        return getUIstring(1,  info,path );
    }

    getGInfoCheckUIstring(trackname) {
        let DATA = [];

        this.INFO_LIST[this.track_list.indexOf(trackname)].map(function (func) {
            let temp = func(trackname);
            if (temp !== NO_TRACK) { DATA.push(temp); }
        });
        return DATA;
    }
}

function getUIstring(num, info, path) {
    switch (num) {
        case 1: 
            let temp = info.map(function (item) {
                if (item[DAPATH.SUBJECT_NAME] !== undefined) return { name: item[DAPATH.SUBJECT_NAME] };    
            });
            return { title: path, data: temp };

        case -1: // graduationinfo
            let tem = []
            for (var key in info){
                tem.push({name:key,value:info[key]})
            }
            return {title : path, data: tem}
    }
}

