//add the evet hander to to the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // get the email 
    // alway remeber to use .value to get text fron an input field
    const Geteamil=document.getElementById('user-email');
    const email=Geteamil.value;
    //same as above code to get the password
    const getPass=document.getElementById('user-pass');
    const pass=getPass.value;
    //do not use this way to to logint int he server side
    if(email==='abireshan32@gmail.com' && pass==='axvcbn5ya'){
      window.location.href='bank.html';
    }
    else{
       alert('tui pass vule gacos kuttar bacca')
    }
})