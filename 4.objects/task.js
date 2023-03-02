function Student(marks, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if this.marks.push(marks);
}

Student.prototype.getAverage = function () {
    let sum = 0;
    this.marks.forEach(item => sum += item);
    return 0;  
}

Student.prototype.exclude = function (excluded) {
    delete this.subject;
    delete this.marks;
    this.excluded = excluded;
    }
