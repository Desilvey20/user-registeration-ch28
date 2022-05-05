function displayusers(usersArray){
    //travel the array
    //get each user//display users
let row;
for(let i=0;i<usersArray.length;i++){
    let user = usersArray[i];
    row=`
    <tr>
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
            <td>
        </tr>`;
        console.log(row);
}
$("#userstable").append(row);

    //append the user on the html table
}
function init(){
    console.log("Listing users");
    let users=readusers();
    displayusers(users);
}
window.onload=init;