 var user =[];
 
 user =JSON.parse(localStorage.getItem("user"));

 var signEmail = document.getElementById('signEmail');
 var signPassword = document.getElementById('signPassword');

//  console.log(signEmail,signPassword);

document.getElementById('login').addEventListener('click',function (params) {

    if ( signEmail.value ==''|| signPassword.value =='') {
        document.getElementById('message').innerHTML=`<p class='text-center'>All input is Requried </p>`;
    }else{
        Checkuser();
    }
})



 function Checkuser(params) {
                                   //error in for lope//
                                   
    for (var i = 0; i < user.length; i++){
        // const element = array[index];
       if (signEmail.value == user[i].Email && signPassword.value == user[i].Password) {
         var y=user[i].name
         localStorage.setItem('userName',y);
         Location.href='../../home/index.html';
         break;
       } 
  
    }
 }





