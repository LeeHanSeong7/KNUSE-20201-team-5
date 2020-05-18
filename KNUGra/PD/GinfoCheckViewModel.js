import Database from '../DM/Database';

var DATA = [
    {
        title: '졸업 요건',
        data: [{name: '-',value:-1}]
    },
    {
        title: '필수 교과목',
        data: [{name: '+'}]
    },
    {
        title: '설계 교과목',
        data: [{name: '='}]
    }
];

export default class GInfoCheckViewModel {
    
<<<<<<< HEAD
    GInfoCheckViewModel(){};

    getDesignUIstring(trackname){
        return Database.getDesignSubjectList.map(function(item){
            if (item["교과목명"] === null){
=======
    getDesignUIstring(){
        return Database.getDesignSubjectList().map(function(item){
            if (item["교과목명"] === undefined){
>>>>>>> 30873ca057c773142f667d87e6ea43f5f0d78a96
                return {name: '-'};
            }
            return {name: item["교과목명"]};
        }) ;
    };
    getRequiredUIstring(trackname){
        let info_arr = Database.getRequiredSubjectLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return [{name: '-'}];
        return info_arr.map(function(item){
            if (item["교과목명"] === undefined){
                return {name: '-'};
            }
            return {name: item["교과목명"]};
        }) ;
    };
    getStartupUIstring(trackname){
        
    };
    getRecommendedUIstring(trackname){
        
    };
    getGraduationInfoUIstring(trackname){
        let info_arr = Database.getGraduationInfoLists();//왜??? 왜 얘만?? 선언해야되????
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return [{name: '-'}];
        return info_arr.map(function(item){
            let key = Object.keys(item)[0];
            if (key === undefined) return {name:'-',value:-1}
            return {name: key,value: item[key]};
        });
    };
    getDATA(trackname){
<<<<<<< HEAD
        DATA[DATA.map(x => x.title).indexOf('졸업 요건')].data = getGraduationInfoUIstring(trackname);
        DATA[DATA.map(x => x.title).indexOf('필수 교과목')].data = getRequiredUIstring(trackname);
        DATA[DATA.map(x => x.title).indexOf('설계 교과목')].data = getDesignUIstring(trackname);
=======
        DATA[DATA.map(x => x.title).indexOf('졸업 요건')].data = this.getGraduationInfoUIstring(trackname);
        DATA[DATA.map(x => x.title).indexOf('필수 교과목')].data = this.getRequiredUIstring(trackname);
        DATA[DATA.map(x => x.title).indexOf('설계 교과목')].data = this.getDesignUIstring();
>>>>>>> 30873ca057c773142f667d87e6ea43f5f0d78a96
        return DATA;
    };
}