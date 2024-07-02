var signUpName = document.getElementById("signName");
var signUpEmail = document.getElementById("signEmail");
var signUpPassword = document.getElementById("signPassword");
var user = [] ;



                                                     // Error in if//sting//
if (localStorage.getItem("user") !=null) {
    user = JSON.parse(localStorage.getItem('user'));
} else {
    user = [];
}

function add(params) {
        if (signUpName.value ==''||signUpEmail.value ==''||signUpPassword.value =='') {
     document.getElementById("Message").innerHTML=`<p class='text-center'>All input is requried </p>`
} else {
    var obj = {
        name:signUpName.value,
        Email:signUpEmail.value ,
        Password: signUpPassword.value,
    }
    user.push(obj);
    // location.href ='../../login/index.html'
    localStorage.setItem(' user ',JSON.stringify(user))

    
}
}