//step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2
   const inputdeposit=document.getElementById('input-deposit');
   const inputdepositValuestring=inputdeposit.value;
   const inputdepositValue=parseFloat(inputdepositValuestring);
   inputdeposit.value='';
   //step-3
   const depositTotal=document.
   getElementById('deposit-total');
   const depositTotalString=depositTotal.innerText;
   const depositTotalValue=parseFloat(depositTotalString);
   //step-4
   const 
   newDepositValue=inputdepositValue+depositTotalValue;
   depositTotal.innerText=newDepositValue;
   //step-5
//get the priveios blance
   const BlanceTotal=document.getElementById('Blance-total');
   const BlanceTotalstring=BlanceTotal.innerText;
   const BlanceTotalValue=parseFloat(BlanceTotalstring);
   //step-6
 const newBlanceTotal=BlanceTotalValue+newDepositValue;
 BlanceTotal.innerText=newBlanceTotal;
})
//step-7 same like privious all step
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawElement=document.getElementById('withdraw-field');
    const withdrawElementString=withdrawElement.value;
    const withdrawValue=parseFloat(withdrawElementString);
    withdrawElement.value='';
    const priveioswithdrawTotal=document.getElementById('withdraw-total');
    const priveioswithdrawTotalstring=priveioswithdrawTotal.innerText;
    const priveioswithdrawTotalValue=parseFloat(priveioswithdrawTotalstring);
   const totalwithdrawValue=withdrawValue+priveioswithdrawTotalValue;
   priveioswithdrawTotal.innerText=totalwithdrawValue;
   //redure after withdraw the blance
   const BlanceTotal=document.getElementById('Blance-total');
   const BlanceTotalstring=BlanceTotal.innerText;
   const BlanceTotalValue=parseFloat(BlanceTotalstring);
   console.log(BlanceTotalValue);
   const afterwithdrawBlanceTotal=BlanceTotalValue-withdrawValue;
   BlanceTotal.innerText=afterwithdrawBlanceTotal;
} )