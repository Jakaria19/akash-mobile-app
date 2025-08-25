document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const account = document.getElementById("account").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("pin").value;
    const balance = parseInt(document.getElementById("balance").innerText);
    const newBalance = balance + amount;
    document.getElementById("balance").innerText = newBalance;
  });
