//Part 1

let grades = [11,13,15,17,12];

let sum = 0;

for (let i=0 ; i<grades.length;i++){
    sum += grades[i];
}

let averageGrade = sum / grades.length; 
console.log('the average grade is:' , averageGrade);


//Part 2

if(averageGrade > 13.5){
    console.log('yaxsi oxuyur');
}else{
    console.log('Yaxsi basi var, oxumur');
}


//Part 3

let gradeLetter;

switch(true){
    case averageGrade > 15:
        gradeLetter = 'A';
        break;
    case averageGrade >=13.5:
        gradeLetter = 'B';
        break;
    case averageGrade >=12.5:
        gradeLetter = 'C';
        break;
    case averageGrade >=11.5:
        gradeLetter = 'D';
        break;
    case averageGrade >10:
        gradeLetter = 'E';
        break;
    default:
        gradeLetter = 'F';
}

console.log ('average grade with letter is: ' , gradeLetter);


//Part 4

const student = {
    name: 'Asif',
    age:18,
    grade:12.6
}

if(student.grade > 16){
    console.log('elachi stipendiya');
}else if(student.grade > 13.5){
    console.log('zerbechi stipendiya');
}else{
    console.log('doner-ayran');
}