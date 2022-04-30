const STORE_KEY = "users";

function saveuser(user){
    let oldData=readusers();
    oldData.push(user);
    console.log(oldData);
    let val=JSON.stringify(oldData);
    localStorage.setItem(STORE_KEY,val);

}
function readusers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data);//<-- JSON
    if(!data){
        return[];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}