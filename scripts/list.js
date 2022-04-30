function displayusers(usersArray){
    //travel the array
    //get each user//display users
let tr="";
for(let i=0;i<usersArray.length;i++){
    let user = usersArray.users[i];
    tr+=`
    <tr id="${user.id}">
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
            <td><button onclick="deletePet();">🗑️</button></td>
        </tr>
        </div>`;
}
document.getElementById("user").innerHTML=tr;

    //append the user on the html table
}
function init(){
    console.log("Listing users");
    let users=readUsers();
    displayusers(users);
}
window.onload=init;