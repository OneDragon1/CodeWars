///instructions
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.




//solution

function abbrevName(name){
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
 }