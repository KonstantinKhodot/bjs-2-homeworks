function Student(marks, name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
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
    if ( this.marks === undefined ) {
        else this.marks = 0;
        return 0;}
    return sum / this.marks.length;  
}

Student.prototype.exclude = function (excluded) {
    delete this.subject;
    delete this.marks;
    this.excluded = excluded;
    }
