
function lifePathNumber(dateOfBirth){
    const [year,month,date]=dateOfBirth.split('-');
    return [year,month,date];
}

console.log(lifePathNumber("1995-07-21"));