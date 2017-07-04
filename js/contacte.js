
// var row = '<tr><td>Pop</td><td>Mihai</td><td>0742179765</td></tr>';

// var contactsList =document.getElementById('contacts-list')
// contactsList.getElementsByTagName('tbody')[0].innerHTML = row + row + row;


// $("#contacts-list tbody")[0].innerHTML =row;


function getRow(firstName, lastName, phone){
    if (phone == undefined) {
        phone = '';
    }
    If (typeof lastName == 'undefined'){
        lastName = '';
    }
    If (firstName == undefined){
        firstName ='';
    }
    firstName = firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + firstName +  '</td><td>' + phone + '</td></tr>';
    return row ;
}
//
// var contacte = [
//     ['Mihai', 'Pop', '0742179765'],
//     ['Adriana', 'Pop', '0742179765'],
//     ['Carol', 'Pop', '0742179765'],
// ];
//

var contacte = [
    {
        firstName: 'Nicolae',
        lastName: 'Matei',
        phone: '01',
    }, {
        firstName: 'Iosif',
        lastName: 'DelaCruz',
        phone: '03',
    }, {
        firstName: 'Mihai',
        lastName: 'Pop',
        phone: '04'
    }
]

var tableContent = '';

for(var i=0; i<contacte.length; i++){
    var contact = contacte[i];
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}



$("#contacts-list tbody").html (tableContent);


// 1. convert from array of arrays into json
// 2. load contacts from file with ajax
// 3. remove contacts (ui)
// 4. edit contacts (ui)