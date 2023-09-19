async function Login() {
    let username = document.getElementById('username').value
    console.log("Username = "+username)
    let password = document.getElementById('pass').value
    console.log("Password = "+password)


    // โยนเข้าเป็น object เอาไว้คุยกับ backend
    let userdata = {
        Username : username,
        Password : password
    }

    console.log('submit data', userdata)
    const response = await axios.post('http://localhost:8000/member/login', userdata)
    console.log('response', response.data)
    window.alert(response.data)

    if(response.data == "login successfully"){
        window.location.href = "movies.html";
    }


}
