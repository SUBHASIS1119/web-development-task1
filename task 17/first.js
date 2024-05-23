// Parent Class School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  
  // PrimarySchool Class
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // HighSchool Class
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // Instances of PrimarySchool and HighSchool
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  
  lorraineHansbury.quickFacts();  // Lorraine Hansbury educates 514 students at the primary school level.
  
  const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  console.log(School.pickSubstituteTeacher(substituteTeachers));  // Random substitute teacher from the array
  
  const alSmith = new HighSchool(
    'Al E. Smith',
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
  );
  
  console.log(alSmith.sportsTeams);  // ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
  
  // Additional functionality: SchoolCatalog Class
  class SchoolCatalog {
    constructor() {
      this._schools = [];
    }
  
    addSchool(school) {
      this._schools.push(school);
    }
  
    get schools() {
      return this._schools;
    }
  }
  
  const primarySchoolCatalog = new SchoolCatalog();
  const highSchoolCatalog = new SchoolCatalog();
  
  primarySchoolCatalog.addSchool(lorraineHansbury);
  highSchoolCatalog.addSchool(alSmith);
  
  console.log(primarySchoolCatalog.schools);  // [PrimarySchool instance]
  console.log(highSchoolCatalog.schools);  // [HighSchool instance]
  