
const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
];

const newStudents = students.map(user => {
    let finalResult;

    if (user.testGrade >= 7) {
        finalResult = "Aprovado";
    }else if  (user.testGrade >= 3) {
        finalResult = "Recuperção"
    }    
    else {
    finalResult = "Reprovado";
}

return {
    name: user.name,
    result: finalResult
};
});

console.log(newStudents);