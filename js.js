do {
var userName = prompt('What is your name?').trim();
if (typeof userName === 'number' || isNaN(userName) === false) {
    alert('not valid your name');
    var check = true; 
}else {
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    var lastName = prompt('What is your last name?').trim();
    var check = false;
}

if (check === false) {
    if (typeof lastName === 'number' || isNaN(lastName) === false) {
        alert('not valid your lastname');
        check = true;
    } else {
        lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        var userEmail = prompt('Enter your email?').replaceAll().toLowerCase();
        check = false;
    }
}else {
    check = true;
}

if (check === false) {
    if (!userEmail.includes('@') || 
        userEmail.startsWith('@') || 
        userEmail.endsWith('@')) {
        alert(`not valid email ${userEmail}`);
        check = true; 
    } else {
    var dateOfBirth = +prompt('Enter your date birthday').replaceAll();
    check = false;
    }
}else {
    check = true;
}

if (check === false) {
    if (isNaN(+dateOfBirth) || 
        dateOfBirth < 1923 || 
        dateOfBirth > 2023) {
        alert(`not valid date of birthday`);
        check = true; 
    } else {
        today = new Date();
        let thisYear = today.getFullYear();
        var userAge = thisYear - dateOfBirth;
        check = false;
    }
}else {
    check = true;
}

} while(check);

document.write (
`<b>Full name:</b> ${userName} ${lastName} <br>
<b>Email:</b> ${userEmail} <br> 
<b>Age:</b> ${userAge}
`);
