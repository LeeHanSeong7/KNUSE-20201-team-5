export default class GInfoCheckViewModel {
    DB = new database();

    DATA = [
        {
            title: '졸업 요건',
            data: [{name: '-',value:-1}]
        },
        {
            title: '필수 교과목',
            data: [{name: '-'}]
        },
        {
            title: '설계 교과목',
            data: [{name: '-'}]
        }
    ];

    getDesignUIstring(trackname){
        return DB.getDesignSubjectList.map(function(item){
            if (item["교과목명"] === null){
                return {name: '-'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getRequiredUIstring(trackname){
        info_arr = DB.getRequiredSubjectLists[trackname];
        if (info_arr === null) return [{name: '-'}];
        return info_arr.map(function(item){
            if (item["교과목명"] === null){
                return {name: '-'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getStartupUIstring(trackname){
        
    }
    getRecommendedUIstring(trackname){
        
    }
    getGraduationInfoUIstring(trackname){
        info_arr = DB.getGraduationInfoLists[trackname];
        if (info_arr === null) return [{name: '-'}];
        return info_arr.map(function(item){
            key = Object.keys(item);
            if (key === null) return {name:'-',value:-1}
            return {name: key,value: item.key};
        });
    }
    getDATA(trackname){
        DATA[this.DATA.map(x => x.title).indexOf('졸업 요건')].data = getGraduationInfoUIstring(trackname);
        DATA[this.DATA.map(x => x.title).indexOf('필수 교과목')].data = getRequiredUIstring(trackname);
        DATA[this.DATA.map(x => x.title).indexOf('설계 교과목')].data = getDesignUIstring(trackname);
        return DATA;
    }
}