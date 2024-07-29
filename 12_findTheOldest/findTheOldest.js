const findTheOldest = function(people) {
    return people.reduce((oldest,person)=>{
        const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
        const age = yearOfDeath - person.yearOfBirth;
        return age > (oldest.age || 0) ? {name: person.name, age}: oldest;
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
