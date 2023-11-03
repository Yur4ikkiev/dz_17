do {
var userName = prompt('What is your name?').trim();
if (userName.includes('@') || userName.includes('1') || 
    userName.includes('2') || userName.includes('3') || 
    userName.includes('4') || userName.includes('5') || 
    userName.includes('6') || userName.includes('7') || 
    userName.includes('8') || userName.includes('9') || 
    userName.includes('0') ) {
    alert('not valid your name');
    var check = true; 
}else {
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    var lastName = prompt('What is your last name?').trim();
    var check = false;
}

if (check === false) {
    if (lastName.includes('@') || lastName.includes('1') || 
        lastName.includes('2') || lastName.includes('3') || 
        lastName.includes('4') || lastName.includes('5') || 
        lastName.includes('6') || lastName.includes('7') || 
        lastName.includes('8') || lastName.includes('9') || 
        lastName.includes('0') ) {
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
