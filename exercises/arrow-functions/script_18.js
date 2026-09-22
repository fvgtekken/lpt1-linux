const students = [{ name: "Ana", grade: 85 }, { name: "Bruno", grade: 55 }, { name: "Carla", grade: 92 }];

const passingStudents = students.filter((student) => {
    return student.grade >= 60
});

const totalGrades = passingStudents.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.grade
},0);

console.log(totalGrades);


//Expected: totalGrades returns 177