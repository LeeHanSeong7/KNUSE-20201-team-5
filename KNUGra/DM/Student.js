
export default class Student {
    #careerList;
    #completedSubjectList;

    constructor() {
        this.#careerList = null;
        this.#completedSubjectList = null;
    }
    
    getCareerList = function() {
        return this.#careerList;
    }
    setCareerList = function(json) {
        this.#careerList = json;
    }
    getCompletedSubjectList = function() {
        return this.#completedSubjectList;
    }
    setCompletedSubjectList = function(json) {
        this.#completedSubjectList = json;
    }
}