document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountString = document.getElementById("deposit-amnt");
  const balanceAmount = document.getElementById("balance-amnt");

  const previousAmount = parseFloat(depositAmountString.innerText);
  const previousBalanceMoneyString = parseFloat(balanceAmount.innerText);
  const depositMoneyString = parseFloat(depositInput.value);

  if(isNaN(depositMoneyString)){
    alert("Enter a valid number");
    return ;
  }
  const currentDepositAmount = previousAmount + depositMoneyString;
  depositAmountString.innerText = currentDepositAmount;
  balanceAmount.innerText = previousBalanceMoneyString + depositMoneyString;

  const balanceMoney = previousBalanceMoneyString;

  depositInput.value = "";
});
