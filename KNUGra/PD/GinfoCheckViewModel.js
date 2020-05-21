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
        return getUIstring(2, trackname, Database.getRequiredSubjectLists(), DAPATH.SOFTWARE_COMBINED_GENERAL);
    }

    getSWcommonUIstring(trackname) {
        return getUIstring(2, trackname, Database.getRequiredSubjectLists(), DAPATH.SOFTWARE_COMBINED_COMMON_MAJOR);
    }

    getGInfoCheckUIstring(trackname) {
        let DATA = [];

        this.INFO_LIST[this.track_list.indexOf(trackname)].map(function (func) {
            console.log(func);
            let temp = func(trackname);
            if (temp !== NO_TRACK) { DATA.push(temp); }
        });
        return DATA;
    }
}

function getUIstring(num, trackname, info, path) {
    switch (num) {
        case -1: // graduationinfo
        case 0: //required, recommended
            info = info[trackname];
            if (info === undefined) return NO_TRACK;
        case 1: //Design, StartUp      
            let temp = info.map(function (item) {
                if (num == -1) {
                    let key = Object.keys(item)[0];
                    if (key !== undefined) return { name: key, value: item[key] };
                } else {
                    if (item[DAPATH.SUBJECT_NAME] !== undefined) return { name: item[DAPATH.SUBJECT_NAME] };
                }
            });
            return { title: path, data: temp };

        case 2: // SW
            let info_arr = info[path];
            if (info_arr === undefined) return NO_TRACK
            let temp2 = info_arr.map(function (item) {
                if (item[DAPATH.SUBJECT_NAME] !== undefined)
                    return { name: item[DAPATH.SUBJECT_NAME] };
            });
            return { title: path, data: temp2 };
    }


}