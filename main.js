//inheritance class
//1
class Student {
  constructor(fullName, grade, studentId) {
    this.fullName = fullName;
    this.grade = grade;
    this.studentId = studentId;
  }
  printDetails() {
    //10
    console.log(this.fullName, this.grade, this.studentId);
  }
}
//2
let firstStudent = new Student("Nati", 11, "213GD");
let secondStudent = new Student("Batel", 10, "673FR");
console.log(firstStudent, secondStudent);
//3
class CollegeStudent extends Student {}
//4
const newStudent = new CollegeStudent("Or", 10, "221234D");
console.log(newStudent);
//5
// class HighSchoolStudent extends Student {}
// 6
// let highStudent = new HighSchoolStudent("Dalia", 11, "2314FE");
// console.log(highStudent);
//7
class HighSchoolStudent extends Student {
  constructor(fullName, grade, studentId, height, age) {
    super(fullName, grade, studentId);
    this.height = height;
    this.age = age;
  }
}
// //8
let highStudent2 = new HighSchoolStudent("Chen", 11, "1243124gf", "1.88", 26);
console.log(highStudent2);
//9
class MiddleSchoolStudent extends Student {
  printDetails() {
    //12 + 13
    super.printDetails();
    console.log("Hello");
  }
}
let middleStudent = new MiddleSchoolStudent("Yoni", 10, "1231jh");
console.log(middleStudent);
//11
middleStudent.printDetails();
