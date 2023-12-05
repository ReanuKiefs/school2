function nameFromEmail(email){
    do{
    email = prompt("geef je email:");
    let placePoint = email.indexOf(".", 1);
    let placeAt = email.indexOf("@", 1);
    const fName = email.substring(0, placePoint);
    const lName = email.substring(placePoint +1, placeAt);
    console.log(`De eigenaar van ${email} is ${fName} ${lName}`);
    }
    while(email !== "")
}
nameFromEmail();