async function register(){
    let firstname = document.getElementById("fname").value
    let lastname = document.getElementById("lname").value
    let pass = document.getElementById("pass").value;
    let cfpass = document.getElementById("cfpass").value;
    let username = document.getElementById("username").value;
    
    console.log(firstname);
    if(pass !==cfpass){
        window.alert("Password doesn't match");
    }
    else{
        let userdata = {
            First_Name: firstname,
            Last_Name: lastname,
            Username : username,
            Password : pass
        }     
        const response = await axios.post('http://localhost:8000/member/register', userdata)
    }
}
