let instance = null;

class Database {
    constructor(){
        if(instance) return instance;

        this.requiredSubjectList = new SubjectList();
        this.designSubjectList = new SubjectList();
        this.startupSubjectList = new SubjectList();
        this.recommendedSubjectList = new SubjectList();
        this.graduationInfoLists = new GraduationInfoList();

        instance = this;
    }

    load(){
        this.designSubjectList = this.loadDesignSubjectList();
        this.requiredSubjectLists = this.loadRequiredSubjectLists();
        this.startupSubjectList = this.loadStartupSubjectList();
        this.recommendedSubjectLists = this.loadRecommendedSubjectLists();
        this.graduationInfoLists = this.loadGraduationInfoLists();
    }

    loadDesignSubjectList(){
        this.designSubjectList = designSubjectList;
    }
    loadRequiredSubjectLists(){
        this.requiredSubjectList = requiredSubjectList;
    }
    loadStartupSubjectList(){
        this.startupSubjectList = startupSubjectList;
    }
    loadRecommendedSubjectLists(){
        this.recommendedSubjectList = recommendedSubjectList;
    }
    loadGraduationInfoLists(){
        this.graduationInfoLists = graduationInfoLists;
    }

    getDesignSubjectList(){
        return this.designSubjectList;
    }
    getRequiredSubjectLists(){
        return this.requiredSubjectList;
    }
    getStartupSubjectList(){
        return this.startupSubjectList;
    }
    getRecommendedSubjectLists(){
        return this.recommendedSubjectList;
    }
    getGraduationInfoLists(){
        return this.graduationInfoLists;
    }
}