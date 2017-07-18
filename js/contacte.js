
// var row = '<tr><td>Pop</td><td>Mihai</td><td>0742179765</td></tr>';

// var contactsList =document.getElementById('contacts-list')
// contactsList.getElementsByTagName('tbody')[0].innerHTML = row + row + row;


// $("#contacts-list tbody")[0].innerHTML =row;


// function getRow(firstName, lastName, phone){
//     if (phone == undefined) {
//         phone = '';
//     }
//     if (typeof lastName == 'undefined'){
//         lastName = '';
//     }
//     if (firstName == undefined){
//         firstName ='';
//     }
//     firstName = firstName || '';
//     var row = '<tr><td>' + lastName + '</td><td>' + firstName +  '</td><td>' + phone + '</td>'+
//         '<td>[<a href="date/remove.html">x</a>]</td>'+
//         '</tr>';
//     return row ;
// }

// var contacte = [
//     ['Mihai', 'Pop', '0742179765'],
//     ['Adriana', 'Pop', '0742179765'],
//     ['Carol', 'Pop', '0742179765'],
// ];
//





var contacte = [];

function getRow(contact){
    var id = contact.id;
    var phone = contact.phone ||'';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';

    var row = '<tr><td>' + lastName + '</td><td>' + firstName +  '</td><td>' + phone + '</td>'+
        '<td>[<a href="date/remove.html?id= '+id+' ">x</a>]</td>'+
        '</tr>';
    return row ;
}

var tableContent = '';

function createRow(contact){
    tableContent += getRow(contact);
}

// for(var i=0; i<contacte.length; i++){
//     createRow(contacte[i])
// }

$.ajax('date/contacte.json').done(function(contacte){
   console.info('contacte', contacte);
   contacte.forEach(createRow);
   $("#contacts-list tbody").html (tableContent);
});








// 1. convert from array of arrays into json
// 2. load contacts from file with ajax
// 3. remove contacts (ui)
// 4. edit contacts (ui)