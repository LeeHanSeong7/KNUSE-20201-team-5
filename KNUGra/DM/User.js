import Student from './Student.js'

export default class User {
    #id;
    #student;

    constructor(){
        this.#id = null;
        this.#student = new Student();
    }
    getId() {
        return this.#id;
    }
    setId(input) {
        this.#id = input;
    }
    getStudent() {
        return this.#student;
    }
};
