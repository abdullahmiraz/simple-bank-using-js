document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmount = document.getElementById("withdraw-amnt");
  const balanceAmount = document.getElementById("balance-amnt");

  const withdrawInputValue = parseFloat(withdrawInput.value);
  const withdrawAmountValue = parseFloat(withdrawAmount.innerText);
  const balanceAmountValue = parseFloat(balanceAmount.innerText);
  
  if(isNaN(withdrawInputValue)){
    alert("Enter a valid number");
    return ;
  }
  if(withdrawInputValue>balanceAmountValue){
    alert("not enough money");
    return ;
  }

  withdrawAmount.innerText = withdrawAmountValue + withdrawInputValue;
  balanceAmount.innerText = balanceAmountValue - withdrawInputValue;
  withdrawInput.value = "";
});
