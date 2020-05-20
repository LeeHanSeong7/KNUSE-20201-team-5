import Database from '../DM/Database';

export default class GInfoCheckViewModel {
    
    getDesignUIstring(){
        return Database.getDesignSubjectList().map(function(item){
            if (item["교과목명"] === undefined){
                return {name: '-'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getRequiredUIstring(trackname){
        let info_arr = Database.getRequiredSubjectLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return ["no track"];
        return info_arr.map(function(item){
            if (item["교과목명"] === undefined){
                return {name: '-'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getStartupUIstring(){
        return Database.getStartupSubjectList().map(function(item){
            if (item["교과목명"] === undefined){
                return {name: '/'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getRecommendedUIstring(trackname){
        let info_arr = Database.getRecommendedSubjectLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return ["no track"];
        return info_arr.map(function(item){
            if (item["교과목명"] === undefined){
                return {name: '%'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getGraduationInfoUIstring(trackname){
        let info_arr = Database.getGraduationInfoLists();//왜??? 왜 얘만?? 선언해야되????
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return ["no track"];
        return info_arr.map(function(item){
            let key = Object.keys(item)[0];
            if (key === undefined) return {name:'-',value:-1}
            return {name: key,value: item[key]};
        });
    }
    getDATA(trackname){
        let DATA = [];
        
        let temp = this.getGraduationInfoUIstring(trackname);
        if (temp !== "no track"){DATA.push({title: '졸업 요건',data: temp});}

        temp = this.getRequiredUIstring(trackname);
        if (temp !== "no track"){DATA.push({title: '필수 교과목',data: temp});}

        DATA.push({title: '설계 교과목',data: this.getDesignUIstring()});
        DATA.push({title: '창업 교과목',data: this.getStartupUIstring()});

        temp = this.getRecommendedUIstring(trackname);
        if (temp !== "no track"){DATA.push({title: '권장 교과목',data: temp});}

        return DATA;
    }
}