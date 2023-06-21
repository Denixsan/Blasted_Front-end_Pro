`use strict`;

class Student {
  constructor(sName, sSurname, sBirthYear, sMarks) {
    this.studentName = sName;
    this.studentSurname = sSurname;
    this.studentBirthYear = sBirthYear;
    this.studentMarks = sMarks;
    console.log(
      `Name: ${this.studentName}; `, 
        `Surname: ${this.studentSurname}; `, 
        `Year of birth: ${this.studentBirthYear}; `, 
        `Marks: ${this.studentMarks}`
    );
    console.log(`Average mark: ${this.average()}; Age: ${this.age()}`);
    this.sAttendance = new Array(25).fill(`visit`);
    console.log(this.sAttendance);
  }
  average() {
    return (
      this.studentMarks.reduce((a, b) => a + b, 0) /
        this.studentMarks.length || 0
    );
  };
  age() {
    return new Date().getFullYear() - this.studentBirthYear;
  };
  absent() {
    let index = this.sAttendance.findIndex(x=> x === `visit`);
    // this.sAttendance.splice(index, 1, `false`);
    this.sAttendance[index] = false;
  };
  present() {
    let index = this.sAttendance.findIndex(x=> x === `visit`);
    // this.sAttendance.splice(index, 1, `true`);
    this.sAttendance[index] = true;
  };
  summary() {
    console.log(this.sAttendance.filter((x) => x === true));
    this.sAvgAttendance = +(
      this.sAttendance.filter((x) => x === true).length /
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
}

const student1 = new Student(`Sus`, `Pup`, `1989`, [98, 78, 66, 75, 64]);
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.summary();
// const student2 = new Student(`Oleg`, `Padlov`, `1997`, [90, 93, 96, 82, 97]);
// const student3 = new Student(`Lola`, `Surka`, `2002`, [95, 96, 97, 98, 99]);
