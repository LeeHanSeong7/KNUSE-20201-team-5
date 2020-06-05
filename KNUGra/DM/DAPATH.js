// data access path
const DAPATH = {
    
    GRADUATION_INFO_LIST : "졸업요건정보목록",
    STUDENT_LIST : "학생목록",
    COMPUTPER_ABEEK : "심화컴퓨터전공(ABEEK)",
    GLOBAL_SOFTWARE_DOUBLE_MAJOR : "글로벌소프트웨어전공(다중전공트랙)",
    GLOBAL_SOFTWARE_OVERSEAS_UNIV : "글로벌소프트웨어전공(해외복수학위트랙)",
    GLOBAL_SOFTWARE_MASTERS_CHAINING : "글로벌소프트웨어전공(학석사연계트랙)",

    SOFTWARE_COMBINED_COMMON_MAJOR : "연계전공공통교육과정",
    SOFTWARE_COMBINED_GENERAL : "연계전공교양교육과정",

    CORE_SOFTWARE : "SW융합전공",
    TEACHING : "교직이수",

    FINTECH : "핀테크전공",
    BIGDATA : "빅데이터전공",
    MEDIAART : "미디어아트",
    CONSTRUCTION_IT : "건설IT전공",

    DOUBLE_MAJOR_COMPUTER : "복수전공(심컴)",
    DOUBLE_MAJOR_GLOBAL_SW : "복수전공(글솦)",

    MINER : "부전공",
    FOREIGN_DOUBLE_TWO_TWO : "외국인복수학위(2+2)",
    FOREIGN_DOUBLE_THREE_ONE : "외국인복수학위(3+1)",
    FOREIGN_EXCHANGE : "외국인교환학생",

    SUBJECT_CODE : "교과목번호",
    SUBJECT_NAME : "교과목명",
    SUBJECT_CREDIT : "학점",
    SUBJECT_REPLACE : "대체교과목번호",

    GRAINFO_GRADUATION : "졸업 요건",
    GRAINFO_REQUIRED : "필수 교과목",
    GRAINFO_ENGLISH : "영어성적",
    GRAINFO_STARTUP : "창업역량",
    GRAINFO_DESIGN : "설계 교과목",
    GRAINFO_COMMON_MAJOR :"SW필수",
    GRAINFO_GENERAL :"SW교양",
    GRAINFO_COMBINED :"연계전공",

    //graduationInfoLists
    LIST_DESIGN : "설계과목",

}
export const detailList = [
    DAPATH.LIST_DESIGN,
    DAPATH.GRAINFO_REQUIRED,
    DAPATH.GRAINFO_STARTUP,
    DAPATH.GRAINFO_COMBINED,
    DAPATH.GRAINFO_COMMON_MAJOR,
    DAPATH.GRAINFO_GENERAL,
]

export const allMajors = [
    DAPATH.COMPUTPER_ABEEK,
    DAPATH.GLOBAL_SOFTWARE_DOUBLE_MAJOR,
    DAPATH.GLOBAL_SOFTWARE_OVERSEAS_UNIV,
    DAPATH.GLOBAL_SOFTWARE_MASTERS_CHAINING,
    DAPATH.FINTECH,
    DAPATH.BIGDATA,
    DAPATH.MEDIAART,
    DAPATH.CONSTRUCTION_IT,
];

export default DAPATH;