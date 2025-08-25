// add money

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const account = document.getElementById("account").value;

    if (account.length < 11) {
      alert("Please provide a valid account number.");
      return;
    }

    const amount = parseInt(document.getElementById("add-amount").value);

    if (amount.length <= 0) {
      alert("Please write valid amount.");
      return;
    }

    const pin = document.getElementById("pin").value;

    if (pin.length != 4) {
      alert("Please provide a valid pin number.");
      return;
    }

    const balance = parseInt(document.getElementById("balance").innerText);
    const newBalance = balance + amount;
    document.getElementById("balance").innerText = newBalance;
  });

//   cash out

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;

    if (agentNumber.length < 11) {
      alert("Please provide a valid agent number.");
      return;
    }

    const cashOutAmount = parseInt(
      document.getElementById("cash-out-amount").value
    );

    if (cashOutAmount.length <= 0) {
      alert("Please write valid amount.");
      return;
    }

    const pin = document.getElementById("pin").value;

    if (pin.length != 4) {
      alert("Please provide a valid pin number.");
      return;
    }

    const balance = parseInt(document.getElementById("balance").innerText);
    const newBalance = balance - cashOutAmount;
    document.getElementById("balance").innerText = newBalance;
  });

//   toggling feature

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cash-out-form").style.display = "none";

  document.getElementById("add-money-form").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-form").style.display = "none";

  document.getElementById("cash-out-form").style.display = "block";
});
