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
    console.log(`Average mark: ${this.average}; Age: ${this.age}`);
    this.sAttendance = new Array(25);
    for (let i = 0; i < this.sAttendance.length; i++) {
      let numGen = +Math.random();
      if (numGen < 0.8) {
        this.present;
        // this.sAttendance[i] = true;
      } else {
        this.absent;
        // this.sAttendance[i] = false;
      }
      // this.sAttendance.fill().map((x,i) => (numGen === 0) ? this.absent() : this.present());
    }
    console.log(this.sAttendance);
    console.log(this.summary);
  }
  get average() {
    return (
      this.studentMarks.reduce((a, b) => a + b, 0) /
        this.studentMarks.length || 0
    );
  };
  get age() {
    return new Date().getFullYear() - this.studentBirthYear;
  };
  get absent() {
    this.sAttendance[i] = false;
  };
  get present() {
    this.sAttendance[i] = true;
  };
  get summary() {
    console.log(this.sAttendance.filter((x) => x == true));
    this.sAvgAttendance = +(
      this.sAttendance.filter((x) => x == true).length /
      this.sAttendance.length
    );
    console.log(`Percentage of attendance: ${this.sAvgAttendance}`);
    if (this.average < 90 && this.sAvgAttendance < 0.9) {
      console.log(`Holy shiet! You're completely lashpet! Get out!`);
    } else if (this.average < 90 || this.sAvgAttendance < 0.9) {
      console.log(`You're lashpet, but not completely.`);
    } else {
      console.log(`You're really krasavchik! Well done!`);
    }
  };
}

const student1 = new Student(`Sus`, `Pup`, `1989`, [98, 78, 66, 75, 64]);
const student2 = new Student(`Oleg`, `Padlov`, `1997`, [90, 93, 96, 82, 97]);
const student3 = new Student(`Lola`, `Surka`, `2002`, [95, 96, 97, 98, 99]);
