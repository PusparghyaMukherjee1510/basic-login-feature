

const valiDation=()=>{
    var userName=document.getElementById('username').value;
    var passWord=document.getElementById('password').value;

    if (userName =='Pusparghya' && passWord =='Login') {
       alert("Successfully Logged in");
       window.open("page2.html");
       return false;
    }else{
        alert("Log in Failed");
    }
}