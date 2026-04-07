interface Class {
  name: string;
  teacher: string;
  students: string[];
}

interface School {
  name: string;
  location: {
    city: string;
    country: string;
  };
  classes: Class[];
}

let school: School = {
  name: "Tech Academy",
  location: {
    city: "Casablanca",
    country: "Morocco"
  },
  classes: [
    {
      name: "JavaScript",
      teacher: "Mr. Ali",
      students: ["Omar", "Sara", "Fatima"]
    },
    {
      name: "Python",
      teacher: "Ms. Nora",
      students: ["Youssef", "Amine", "Hiba", "Karim"]
    }
  ]
};