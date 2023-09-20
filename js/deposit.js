//add the evet listener to the deposit buton
document.getElementById('btn-deposit').addEventListener('click',function(){
    //setp-2: get the deposit amount from the deposit input field
    //for input field use .value ito the value inside the input field
    //sob input string hisabe jay and pore sta pooriborton kore nity hoy
    const depositfiedl=document.getElementById('deposit-field');
    const depositAmountstring=depositfiedl.value;
    //string ta k number poribonton krty parsefloat use krty hoy
    const depositAmount=parseFloat(depositAmountstring);
// step:3 get the current deposit total
// for no-input(element other that input,text arear) use innertext to get the text
    const depositvalue=document.getElementById('deposit-amount');
    const depositamountstring=depositvalue.innerText;
    // string poriborton krlm numbr a
    const depositamount=parseFloat(depositamountstring);
    const currentTotal=depositAmount+depositamount
    //inner text a current toatal ta poriborton kore dity hobe
    // add diposit total
    depositvalue.innerText=currentTotal;
    // clear the dipsodit field;
   depositfiedl.value=''; 

   const blanceTotal= document.getElementById('Blance-total');
   const blacneValuestring=blanceTotal.innerText;
   const blacneValue=parseFloat(blacneValuestring);
   const BlanceAmount=blacneValue+currentTotal;
   blanceTotal.innerText=currentTotal;
})
//withdewl coding for withdraw the mony
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawfield=document.getElementById('Withdraw-field');
    const withdrawValuestring=withdrawfield.value;
    const withdrawValue=parseFloat(withdrawValuestring);

    const withdrawInput=document.getElementById('Withdraw-input');
    const withdrawInputString=withdrawInput.innerText;
    const withdrawInputValue=parseFloat(withdrawInputString);
//add the value to the witfea input field..ami koto taka utassti ata bujar jnno
    const totalWithdraw=withdrawInputValue+withdrawValue;
    withdrawInput.innerText=totalWithdraw;

    const blancetotalElement=document.getElementById('Blance-total');
    const blanceTotalValuestring=blancetotalElement.innerText;
    const blacneValue=parseFloat(blanceTotalValuestring);
    const newBlnace=blacneValue-withdrawValue;
    blancetotalElement.innerText=newBlnace;

    withdrawfield.value='';
    
})