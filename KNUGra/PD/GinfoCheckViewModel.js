
const DATA = [
    {
        title: '졸업 요건',
        data: [{name: '이수학점',value:'150 학점'},{name:'기본소양',value:'15 학점'},{name:'전공기반',value:'22 학점'},
        {name: '공학전공',value:'75 학점'},{name:'공학인증',value:'112 학점'},{name:'영어성적',value:'토익700점'},
        {name: '현장실습',value:'3 학점'},{name:'공학상담',value:'8 회'},{name:'설계과목',value:'16 학점'}]
    },
    {
        title: '필수 교과목',
        data: [{name: '자료구조'},{name:'시스템프로그래밍'},{name:'종합설계프로젝트2'},
        {name: '종합설계프로젝트1'},{name:'프로그래밍기초'},{name:'컴퓨터구조'},
        {name: '운영체제'},{name:'물리학 I'},{name:'기초창의공학설계'},
        {name: '물리학실험 I'},{name:'자바프로그래밍'},{name:'수학 I'},
        {name: '이산수학'},{name:'알고리즘1'}]
    },
    {
        title: '설계 교과목',
        data: [{name: '시스템프로그래밍'},{name: '디지털설계및실험'},{name: '종합설계프로젝트2'},
        {name: '종합설계프로젝트1'},{name: '소프트웨어설계'},{name: '소프트웨어공학'},
        {name: '기초창의공학설계'},{name: '자바프로그래밍'}]
    }
];

export default class GInfoCheckViewModel {
    
    getDATA(trackname){
        return DATA;
    }
}