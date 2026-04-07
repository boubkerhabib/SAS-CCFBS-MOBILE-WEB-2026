
interface Student {
  name: string;
  age: number;
  city: string;
  isActive?: boolean;
  hobbies: string[];
  address: {
    street: string;
    zip: string;
    country: string;
  };
  email?: string;
}


let student: Student = {
  name: "Ali",
  age: 22,
  city: "Fes",
  isActive: true,
  hobbies: ["Football", "Coding", "Music","bilardo"],
  address: {
    street: "Rue 10",
    zip: "30000",
    country: "Morocco"
  }
};

console.log(student.name);
console.log(student.address.country);
console.log(student.hobbies[1]);
student.email = "ali@email.com";
student.city = "Rabat";
delete student.isActive;
console.log(student);