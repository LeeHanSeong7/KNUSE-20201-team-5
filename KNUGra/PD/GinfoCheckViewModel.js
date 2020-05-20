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
        if (info_arr === undefined) return "no track";
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
        if (info_arr === undefined) return "no track";
        return info_arr.map(function(item){
            if (item["교과목명"] === undefined){
                return {name: '%'};
            }
            return {name: item["교과목명"]};
        }) ;
    }
    getGraduationInfoUIstring(trackname){
        let info_arr = Database.getGraduationInfoLists();
        info_arr = info_arr[trackname];
        if (info_arr === undefined) return "no track";
        return info_arr.map(function(item){
            let key = Object.keys(item)[0];
            if (key === undefined) return {name:'-'}
            return {name: key,value: item[key]};
        });
    }
    getGInfoCheckUIString(trackname){
        let DATA = [];

        let temp = this.getGraduationInfoUIstring(trackname);
        if (temp !== "no track"){DATA.push({title: '졸업 요건',data: temp});}

        temp = this.getRequiredUIstring(trackname);
        if (temp !== "no track"){DATA.push({title: '필수 교과목',data: temp});}

        if (trackname === "심화컴퓨터전공(ABEEK)")
            DATA.push({title: '설계 교과목',data: this.getDesignUIstring()});

        if(trackname === "글로벌소프트웨어전공(다중전공트랙)"||trackname==="글로벌소프트웨어전공(해외복수학위트랙)")
            DATA.push({title: '창업 교과목',data: this.getStartupUIstring()});

        temp = this.getRecommendedUIstring(trackname);
        if (temp !== "no track"){
            DATA.push({title: '연계 전공',data: temp});
            temp = Database.getRequiredSubjectLists()["연계전공공통교육과정"].map(function(item){
                if (item["교과목명"] === undefined){
                    return {name: '-'};
                }
                return {name: item["교과목명"]};
            });
            DATA.push({title: 'SW전공', data: temp})
            temp = Database.getRequiredSubjectLists()["연계전공교양교육과정"].map(function(item){
                if (item["교과목명"] === undefined){
                    return {name: '-'};
                }
                return {name: item["교과목명"]};
            });
            DATA.push({title: 'SW교양', data: temp})
        }


        return DATA;
    }




}