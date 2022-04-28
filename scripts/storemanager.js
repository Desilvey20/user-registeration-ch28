function saveuser(user){
    let val=JSON.stringify(user);
    localStorage.setItem("users",user);

}