import Student from './Student.js'

export default function User(id) {
    this.id = id;
    this.student = new Student();
};
