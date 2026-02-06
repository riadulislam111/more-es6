const students = [
    { id: 1, name: 'abul', marks: 50 },
    { id: 2, name: 'Nbul', marks: 85 },
    { id: 3, name: 'Babul', marks: 95 },
    { id: 4, name: 'Tutul', marks: 15 },
    { id: 5, name: 'dabul', marks: 20 }

]

const names = students.map(student => student.marks * 0.75)
const goodStudents = students.filter(student => student.marks > 80)
const goodStudent = students.find(student => student.marks > 80)
console.log(goodStudents)