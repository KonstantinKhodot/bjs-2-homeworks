function Student(name, gender, age) {
    let student = new Student;
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ( this.marks === undefined) {
        this.marks = [mark];
        } else {
        this.marks.push(mark);
        }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    this.marks.forEach(item => sum += item);
    return sum / this.marks.length;  
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.reason = reason;
    }
