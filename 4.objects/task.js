function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
    this.marks.push(...marks); 
    }
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
        let sum = 0;
        this.marks.forEach(item => sum += item);
    return sum / this.marks.length;  
}

Student.prototype.exclude = function (excluded) {
    delete this.subject;
    delete this.marks;
    this.excluded = excluded;
    }
