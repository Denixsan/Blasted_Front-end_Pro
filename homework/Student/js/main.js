`use strict`;

class Student {
  constructor(sName, sSurname, sBirthYear, sMarks) {
    this.studentName = sName;
    this.studentSurname = sSurname;
    this.studentBirthYear = sBirthYear;
    this.studentMarks = sMarks;
    console.log(
      `Name: ${this.studentName}; ` +
        `Surname: ${this.studentSurname}; ` +
        `Year of birth: ${this.studentBirthYear}; ` +
        `Marks: ${this.studentMarks}`
    );
    this.average = function () {
      return (
        this.studentMarks.reduce((a, b) => a + b, 0) /
          this.studentMarks.length || 0
      );
    };
    this.age = function () {
      return new Date().getFullYear() - this.studentBirthYear;
    };
    console.log(`Average mark: ${this.average()}; Age: ${this.age()}`);
    // this.absent = function () {
    //     this.sAttendance[i] = false;
    // };
    // this.present = function () {
    //     this.sAttendance[i] = true;
    // };
    this.sAttendance = new Array(25);
    for (let i = 0; i < this.sAttendance.length; i++) {
      let numGen = +Math.random();
      if (numGen < 0.8) {
        // this.present();
        this.sAttendance[i] = true;
      } else {
        // this.absent();
        this.sAttendance[i] = false;
      }
      // this.sAttendance.fill().map((x,i) => (numGen === 0) ? this.absent() : this.present());
    }
    console.log(this.sAttendance);
    this.summary = function () {
      console.log(this.sAttendance.filter((x) => x == true));
      this.sAvgAttendance = +(
        this.sAttendance.filter((x) => x == true).length /
        this.sAttendance.length
      );
      console.log(`Percentage of attendance: ${this.sAvgAttendance}`);
      if (this.average() < 90 && this.sAvgAttendance < 0.9) {
        console.log(`Holy shiet! You're completely lashpet! Get out!`);
      } else if (this.average() < 90 || this.sAvgAttendance < 0.9) {
        console.log(`You're lashpet, but not completely.`);
      } else {
        console.log(`You're really krasavchik! Well done!`);
      }
    };
    this.summary();
  }
}

const student1 = new Student(`Sus`, `Pup`, `1989`, [98, 78, 66, 75, 64]);
const student2 = new Student(`Oleg`, `Padlov`, `1997`, [90, 93, 96, 82, 97]);
const student3 = new Student(`Lola`, `Surka`, `2002`, [95, 96, 97, 98, 99]);
