type Studentx = {
  name: string;
  age: number;
  grade: number;
};

const students: Studentx[] = [
  { name: "Ali", age: 20, grade: 12 },
  { name: "Sara", age: 22, grade: 15 },
  { name: "Youssef", age: 19, grade: 8 },
  { name: "Lina", age: 21, grade: 17 },
  { name: "Omar", age: 23, grade: 10 }
];

let passedCount = 0;
let highestStudent = students[0];
let total = 0;
for (const student of students) {
  console.log(`${student.name} - Grade: ${student.grade}`);
  if (student.grade >= 10) {
    passedCount++;
  }
  if (student.grade > highestStudent.grade) {
    highestStudent = student;
  }
  total += student.grade;
}

const average = total / students.length;

console.log("Passed students:", passedCount);
console.log("Highest grade:", highestStudent.name, highestStudent.grade);
console.log("Class average:", average);