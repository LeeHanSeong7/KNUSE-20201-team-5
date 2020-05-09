let instance = null;

class database {
    constructor(){
        if(instance) return instance;

        this.requiredSubjectList = new subjectList();
        this.designSubjectList = new subjectList();
        this.startupSubjectList = new subjectList();
        this.recommendedSubjectList = new subjectList();

        instance = this;
    }

    load(){
        designSubjectList = this.loadDesignSubjectList();
        requiredSubjectLists = this.loadRequiredSubjectLists();
        startupSubjectList = this.loadStartupSubjectList();
        recommendedSubjectLists = this.loadRecommendedSubjectLists();
    }

    loadDesignSubjectList(){
        
    }
    loadRequiredSubjectLists(){

    }
    loadStartupSubjectList(){

    }
    loadRecommendedSubjectLists(){

    }
}