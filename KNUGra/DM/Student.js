
export default function Student() {
    this.careerList = null;
    this.completedSubjectList = null;
    
    this.getStudent = function() {
        return this;
    }
    this.setCareerList = function(careerList) {
        this.careerList = careerList;
    }
    this.setCompletedSubjectList = function(completedSubjectList){
        this.completedSubjectList = completedSubjectList;
    }
}